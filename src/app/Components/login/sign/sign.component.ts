import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSignService } from 'src/app/services/auth-sign.service';
import { User } from 'src/app/ViewModals/user';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
 
  adminFrm: FormGroup
  admininfo:User={}

  constructor(private fb: FormBuilder,private auth:AuthSignService,private router:Router) { 

    this.adminFrm=this.fb.group({
   
      id:[this.admininfo.id],
      Email: new FormControl(this.admininfo.Email,[Validators.required,Validators.email]),
      Password:[this.admininfo.Password],
      JoinDate:[this.admininfo.JoinDate]
  
  
      });
  }

  ngOnInit(): void {
  }


    list:User[]=[]
    userId:string=''
    admininfoLogin:User={}
  login(){
    console.log(this.adminFrm.value)
    this.admininfoLogin=this.adminFrm.value
    console.log(this.admininfoLogin.Email)
    console.log(this.admininfoLogin.Password)
    console.log(this.admininfoLogin)


    this.auth.checkforAdmin(this.admininfoLogin.Email,this.admininfoLogin.Password).subscribe((res) => {

      this.list = res.map(data => {
        this.userId=data.payload.doc.id
        // this.auth.userId=this.userId
      localStorage.setItem('currentUser', this.userId);
console.log(this.userId)
        // console.log(this.userId)
      this.router.navigate(['/dash/main']);
      // this.authSer.userLogin=true
      // console.log(this.authSer.userLogin)


        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        }
      });
    }, (err) => console.log(err))

   }
  }

