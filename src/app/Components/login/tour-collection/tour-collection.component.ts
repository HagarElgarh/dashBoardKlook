import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CollectionsService } from 'src/app/services/collections.service';
import { Tours } from 'src/app/ViewModals/tours';
import { NgModule } from '@angular/core';
import { AuthSignService } from 'src/app/services/auth-sign.service';


@Component({
  selector: 'app-tour-collection',
  templateUrl: './tour-collection.component.html',
  styleUrls: ['./tour-collection.component.scss']
})
export class TourCollectionComponent implements OnInit {
  btnCreate: string = 'Create';

  formsBool: boolean = false;
  formsUpdate: boolean=false;

  loginFrm: FormGroup;
  list: Tours = {};


  subsign: string = '';
  Backgroundcolor: string = '#4F5467';

  dataSourceadmin: Tours[] = [];

  updateFrm: FormGroup;
  tourinfo:Tours={}



  routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
    (params: ParamMap) => {
      this.subsign = String(params.get('color'));
    }
  );
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,
    private collSer: CollectionsService,private auth:AuthSignService) {

    this.loginFrm=fb.group({
   
      // id:['']
        Booked:['2K']
        ,Categories:['']
        ,City:['']
        ,Date:['']
        ,Image:['https://firebasestorage.googleapis.com/v0/b/friendlychat-e399d.appspot.com/o/Tours%2F36.jpg?alt=media&token=f2821bd1-e28e-48cb-b968-25448f6b433b']
        ,OldPrice:['250']
        ,Price:['200']
        ,Rate:['5.2']
        ,Review:['25']
        ,Section:['']
        ,Title:['']
        ,TourDiscount:['10%']
        ,TourSectionInner:['']
  
  
  
      });

      this.updateFrm=this.fb.group({
   
        id:[this.tourinfo.id],
        Booked:[this.tourinfo.Booked]
        ,Categories:[this.tourinfo.Categories]
        ,City:[this.tourinfo.City]
        ,Date:[this.tourinfo.Date]
        ,Image:[this.tourinfo.Image]
        ,OldPrice:[this.tourinfo.OldPrice]
        ,Price:[this.tourinfo.Price]
        ,Rate:[this.tourinfo.Rate]
        ,Review:[this.tourinfo.Review]
        ,Section:[this.tourinfo.Section]
        ,Title:[this.tourinfo.Title]
        ,TourDiscount:[this.tourinfo.TourDiscount]
        ,TourSectionInner:[this.tourinfo.TourSectionInner]
    
    
        });
   
  }

  ngOnInit(): void {

    this.collSer.getallTour().subscribe(data => {

      this.dataSourceadmin = data.map(elementt => {
        return {
          id: elementt.payload.doc.id,
          ...elementt.payload.doc.data()
        }
      })

    });
  }


  addTour(){
    this.list = this.loginFrm.value
    console.log(this.loginFrm.value)
    console.log(this.list)
    this.collSer.addToTours(this.list)
    this.formsBool=!this.formsBool;
    
  }

  deleteTour(id: string|undefined){

    this.collSer.deleteTour(id)
    console.log(id)


  }

  updateTour(tour : Tours){

    console.log(tour)
    this.tourinfo=tour;
    this.updateFrm=this.fb.group({
   
      id:[this.tourinfo.id],
      Booked:[this.tourinfo.Booked]
      ,Categories:[this.tourinfo.Categories]
      ,City:[this.tourinfo.City]
      ,Date:[this.tourinfo.Date]
      ,Image:[this.tourinfo.Image]
      ,OldPrice:[this.tourinfo.OldPrice]
      ,Price:[this.tourinfo.Price]
      ,Rate:[this.tourinfo.Rate]
      ,Review:[this.tourinfo.Review]
      ,Section:[this.tourinfo.Section]
      ,Title:[this.tourinfo.Title]
      ,TourDiscount:[this.tourinfo.TourDiscount]
      ,TourSectionInner:[this.tourinfo.TourSectionInner]
  
  
      });
    this.formsUpdate=!this.formsUpdate;
  }

  updateThisTour()
{
  console.log(this.tourinfo)
  this.tourinfo=this.updateFrm?.value;
  console.log(this.tourinfo)
  console.log(this.updateFrm?.value)

  this.collSer.updatetour(this.tourinfo)
  this.formsUpdate=!this.formsUpdate;

} 

changeView() {
    this.formsBool = !this.formsBool;
    if (this.formsBool == true) {
      this.btnCreate = 'Show List';
    } else {
      this.btnCreate = 'Create';
    }
  }

  getColor() {
    return this.subsign;
  }
}
