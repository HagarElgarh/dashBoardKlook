import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthSignService } from 'src/app/services/auth-sign.service';
import { CollectionsService } from 'src/app/services/collections.service';
// import { Tours } from 'src/app/ViewModals/tours';
import { Wifi } from './../../../ViewModals/wifi';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {
  btnCreate: string = 'Create';

  formsBool: boolean = false;
  formsUpdate: boolean=false;

  loginFrm: FormGroup;
  list: Wifi = {};


  subsign: string = '';
  Backgroundcolor: string = '#4F5467';

  dataSourceadmin: Wifi[] = [];

  updateFrm: FormGroup;
  tourinfo:Wifi={}



  routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
    (params: ParamMap) => {
      this.subsign = String(params.get('color'));
    }
  );
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,
    private collSer: CollectionsService,private auth:AuthSignService) {

    this.loginFrm=fb.group({
   
  // id:['this.tourinfo.id'],
        Booked:['']
        
        ,Date:['']
        ,Image:['']
        ,Price:['']
        ,Rate:['']
        
        ,Title:[''],
        
    Coverage:[''],
  
    Internet:[''],
    Location:[''],
   
    Reviews:[''],
    Service:[''],
    Validity:['']
  
  
  
      });

      this.updateFrm=this.fb.group({
   
        id:[this.tourinfo.id],
        Booked:[this.tourinfo.Booked]
        
        ,Date:[this.tourinfo.Date]
        ,Image:[this.tourinfo.Image]
        ,Price:[this.tourinfo.Price]
        ,Rate:[this.tourinfo.Rate]
        
        ,Title:[this.tourinfo.Title],
        
    Coverage:[this.tourinfo.Coverage],
  
    Internet:[this.tourinfo.Internet],
    Location:[this.tourinfo.Location],
   
    Reviews:[this.tourinfo.Reviews],
    Service:[this.tourinfo.Service],
    Validity:[this.tourinfo.Validity]
    
    
        });
   
  }

  ngOnInit(): void {

    this.collSer.getallwifi().subscribe(data => {

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
    this.collSer.addTowifi(this.list)
    
  }

  deleteTour(id: string|undefined){

    this.collSer.deletewifi(id)
    console.log(id)


  }

  updateTour(tour : Wifi){

    console.log(tour)
    this.tourinfo=tour;
    this.updateFrm=this.fb.group({
   
      id:[this.tourinfo.id],
        Booked:[this.tourinfo.Booked]
        
        ,Date:[this.tourinfo.Date]
        ,Image:[this.tourinfo.Image]
        ,Price:[this.tourinfo.Price]
        ,Rate:[this.tourinfo.Rate]
        
        ,Title:[this.tourinfo.Title],
        
    Coverage:[this.tourinfo.Coverage],
  
    Internet:[this.tourinfo.Internet],
    Location:[this.tourinfo.Location],
   
    Reviews:[this.tourinfo.Reviews],
    Service:[this.tourinfo.Service],
    Validity:[this.tourinfo.Validity]
  
  
      });
    this.formsUpdate=!this.formsUpdate;
  }

  updateThisTour()
{
  console.log(this.tourinfo)
  this.tourinfo=this.updateFrm?.value;
  console.log(this.tourinfo)
  console.log(this.updateFrm?.value)

  this.collSer.updatewifi(this.tourinfo)
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
