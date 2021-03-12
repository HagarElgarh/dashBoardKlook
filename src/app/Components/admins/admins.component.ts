import { Component, OnInit } from '@angular/core';
// import { FormGroup, Validators } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthSignService } from 'src/app/services/auth-sign.service';
import { Tours } from 'src/app/ViewModals/tours';
import { User } from 'src/app/ViewModals/user';
import { NgModule } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  // loginFrm: FormGroup;
  adminFrm: FormGroup
  list: Tours = {};
  dataSource: User[] = [];
  dataSourceadmin: User[] = [];
  tourupdate: Tours[] = [];
  tourupdatedispaly: Tours[] = [];
  // displayedColumns: string[] = ['Email', 'JoinDate', 'Delete','Update'];
  displayedColumnsadmin: string[] = ['Email', 'JoinDate', 'Delete','Update'];
  searchkey:string='egy'
  itemToEdit: Tours={};
  userId:string='';
  signBoolupdate:boolean=false

  signBool: boolean = false;
  btnAdmiText = 'Add Admin';


  constructor(private router: Router,
     private authSer: AuthSignService,
    // private relser: RelaxServiceService,
      private activatedRoute: ActivatedRoute,
       private fb: FormBuilder, 
       private collSer: CollectionsService
      // private TourServies: RelaxServiceService
      ) {

    this.adminFrm=this.fb.group({
   
      id:[this.admininfo.id],
      Email:[this.admininfo.Email],
      Password:[this.admininfo.Password],
      JoinDate:[this.admininfo.JoinDate]
  
  
      });
   




    this.authSer.getalladmin().subscribe(data => {

      this.dataSourceadmin = data.map(elementt => {
        return {
          id: elementt.payload.doc.id,
          ...elementt.payload.doc.data()
        }
      })

    });
   


  }

  ngOnInit(): void {

  }


  add() {
    // this.list = this.loginFrm.value
    // console.log(this.loginFrm.value)
    console.log(this.list)
    // this.TourServies.addToTours(this.list)

  }

  //////////////////////////////////// admin signup ////////////////////

  listUser: User = { Password: '', Email: ''}
  errorMsg: string = ''
  userType: string = 'user'
  users: User[] = []

  // users: Iuser[] =[]


  Password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  Email = new FormControl('', [Validators.required, Validators.minLength(6), Validators.email, Validators.maxLength(100)]);

  getErrorMessage() {
    if (this.Email.validator) {
      return 'You must enter a value ex:email@email.com';
    }

    else {
      return ''
    }
  }
    getErrorMessagepass(){
      if (this.Password.validator) {
        return 'You must enter a value ex:123456';
      }
  
      else {
  
        return ''
      }
    }
    // return this.Email.hasError('email') ? 'Not a valid email' : '';
  
  // list:Iuser={}
  listadd: User = { Email: '', Password: '' }

  signupp() {

  this.listadd.Email=this.Email.value;
  this.listadd.Password=this.Password.value;
  this.listadd.JoinDate=Date.now()
  
  console.log(this.listadd)

  this.authSer.addAdmin(this.listadd).then(res=>{
    this.userId=res;
    // this.router.navigate(['/admin']);
    this.signBool=false

  })
  .catch(err =>
    {
      console.log("errrrrorrr"+err)
    })

  }




  //////////////////////////////////// admin signup end ////////////////////

  ///////////////////////// coustmer ////////////////


  delete(id: string) {
    this.authSer.deleteAdmin(id);
  
  }

  
  ///////////////////////// coustmer end ////////////////


  sign() {
    this.signBool = !this.signBool
    if (this.signBool == true) {
      this.btnAdmiText = 'Show Admin'
    }
    else this.btnAdmiText = 'Add Admins'
  }

/////////////////////////////////////////////

  admininfo:User={}
  updatebtn(admin:User){
    this.signBoolupdate=true
    this.admininfo=admin
    // console.log(admin)
    // console.log(this.admininfo)
    this.adminFrm=this.fb.group({
   
      id:[this.admininfo.id],
      Email:[this.admininfo.Email],
      Password:[this.admininfo.Password],
      JoinDate:[this.admininfo.JoinDate]
  
      });


  }
  updateeadmin(){
    this.signBoolupdate=false
    // console.log(this.adminFrm?.value)
    console.log(this.admininfo)
    this.admininfo=this.adminFrm?.value;
    console.log(this.admininfo)


    this.authSer.updateAdmin(this.admininfo)
  }


  userinfo:User={}

  


}