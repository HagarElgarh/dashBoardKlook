import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tours } from '../ViewModals/tours';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  itemDoc?: AngularFirestoreDocument<Tours>;

  constructor(private fb:AngularFirestore) { }

  addToTours(itemm: Tours) {

    // console.log(itemm)
    this.fb.collection('ToursCollection').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  addTowifi(itemm: Tours) {

    // console.log(itemm)
    this.fb.collection('Wifi_&_SimCards').add(itemm).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  getallTour(){
    
    return this.fb.collection<Tours>('ToursCollection')
    .snapshotChanges();

  }

  getallwifi(){
    
    return this.fb.collection<Tours>('Wifi_&_SimCards')
    .snapshotChanges();

  }

  deleteTour(id:string|undefined) {
    return this.fb.collection("ToursCollection").doc(id).delete();
    // this.afAuth.currentUser
  }

  deletewifi(id:string|undefined) {
    return this.fb.collection("Wifi_&_SimCards").doc(id).delete();
    // this.afAuth.currentUser
  }

  updatetour(item: Tours){
    
    this.itemDoc = this.fb.doc(`ToursCollection/${item.id}`);
    this.itemDoc.update(item);
  }
  updatewifi(item: Tours){
    
    this.itemDoc = this.fb.doc(`Wifi_&_SimCards/${item.id}`);
    this.itemDoc.update(item);
  }
}
