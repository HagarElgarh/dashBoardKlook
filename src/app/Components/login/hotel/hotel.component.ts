import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthSignService } from 'src/app/services/auth-sign.service';
import { CollectionsService } from 'src/app/services/collections.service';
// import { Wifi } from 'src/app/ViewModals/wifi';
import { Hotel } from './../../../ViewModals/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  btnCreate: string = 'Create';

  formsBool: boolean = false;
  formsUpdate: boolean=false;

  loginFrm: FormGroup;
  list: Hotel = {};


  subsign: string = '';
  Backgroundcolor: string = '#4F5467';

  dataSourceadmin: Hotel[] = [];

  updateFrm: FormGroup;
  tourinfo:Hotel={}



  routeSubscription: Subscription = this.activatedRoute.paramMap.subscribe(
    (params: ParamMap) => {
      this.subsign = String(params.get('color'));
    }
  );
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder,
    private collSer: CollectionsService,private auth:AuthSignService) {

    this.loginFrm=fb.group({
   
  // id:['this.tourinfo.id'],
        // Booked:['']
        BookedHotel:[''],
        CityHotel:[''],
        DateHotel:[''],
        Degree:[''],
        Image:[''],
        Oldprice:[''],
        Premium:[''],
        PriceHotel:[''],
        RateHotel:[''],
        ReviewHotel:[''],
        Section:[''],
        TitleHotel:['']
  
        
  
      });

      this.updateFrm=this.fb.group({
   
        id:[this.tourinfo.id],
        BookedHotel:[this.tourinfo.BookedHotel]
        
        ,CityHotel:[this.tourinfo.CityHotel]
        ,DateHotel:[this.tourinfo.DateHotel]
        ,Degree:[this.tourinfo.Degree]
        ,Image:[this.tourinfo.Image]
        
        ,Oldprice:[this.tourinfo.Oldprice],
        
        Premium:[this.tourinfo.Premium],
  
    PriceHotel:[this.tourinfo.PriceHotel],
    RateHotel:[this.tourinfo.RateHotel],
   
    ReviewHotel:[this.tourinfo.ReviewHotel],
    Section:[this.tourinfo.Section],
    TitleHotel:[this.tourinfo.TitleHotel]
    
    
        });
   
  }

  ngOnInit(): void {

    this.collSer.getallHotel().subscribe(data => {

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
    this.collSer.addTohotel(this.list)
    
  }

  deleteTour(id: string|undefined){

    this.collSer.deleteHotel(id)
    console.log(id)


  }

  updateTour(tour : Hotel){

    console.log(tour)
    this.tourinfo=tour;
    this.updateFrm=this.fb.group({
   
      id:[this.tourinfo.id],
        BookedHotel:[this.tourinfo.BookedHotel]
        
        ,CityHotel:[this.tourinfo.CityHotel]
        ,DateHotel:[this.tourinfo.DateHotel]
        ,Degree:[this.tourinfo.Degree]
        ,Image:[this.tourinfo.Image]
        
        ,Oldprice:[this.tourinfo.Oldprice],
        
        Premium:[this.tourinfo.Premium],
  
    PriceHotel:[this.tourinfo.PriceHotel],
    RateHotel:[this.tourinfo.RateHotel],
   
    ReviewHotel:[this.tourinfo.ReviewHotel],
    Section:[this.tourinfo.Section],
    TitleHotel:[this.tourinfo.TitleHotel]
  
      });
    this.formsUpdate=!this.formsUpdate;
  }

  updateThisTour()
{
  console.log(this.tourinfo)
  this.tourinfo=this.updateFrm?.value;
  console.log(this.tourinfo)
  console.log(this.updateFrm?.value)

  this.collSer.updateHotel(this.tourinfo)
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
