import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Tours } from '../ViewModals/tours';
import { User } from '../ViewModals/user';

@Injectable({
  providedIn: 'root'
})
export class AuthSignService {

  userLogin :boolean=true
  constructor(private fb:AngularFirestore) {

    if (localStorage.getItem("currentUser") === null) {
      this.userLogin=true
    }
    else{
      this.userLogin=false

    }
   }

  getalluser(){
   
    return this.fb.collection<User>('users')
    .snapshotChanges();

  }

  getalladmin(){
    
    return this.fb.collection<User>('admins')
    .snapshotChanges();

  }

  getallTour(){
    
    return this.fb.collection<Tours>('ToursCollection')
    .valueChanges();

  }

  
  addAdmin(itemm:User){

 

    return this.fb.collection('admins').add(itemm).then(function (docRef) {
      console.log("admin added with ID: ", docRef.id);
     return docRef.id;
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        return "error"
      });

      


  }

  deleteAdmin(id:string) {
    return this.fb.collection("admins").doc(id).delete();
    // this.afAuth.currentUser
  }

  deleteuser(id:string) {
    return this.fb.collection("users").doc(id).delete();
    // this.afAuth.currentUser
  }

  itemDoc?: AngularFirestoreDocument<User>;

  updateAdmin(item: User){
    
    // console.log(item)
    // console.log(item.id)
    this.itemDoc = this.fb.doc(`admins/${item.id}`);
    this.itemDoc.update(item);
  }


  updateUsers(item: User){
    
    // console.log(item)
    // console.log(item.id)
    this.itemDoc = this.fb.doc(`users/${item.id}`);
    this.itemDoc.update(item);
  }

  addToTours(itemm: Tours) {

    // console.log(itemm)
    this.fb.collection('ToursCollection').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  checkforAdmin(email?:string,password?:string){

    return this.fb.collection<User>('admins', ref => ref.where('Email', '==', email).where('Password', '==', password))
    .snapshotChanges();
  
  }
}


