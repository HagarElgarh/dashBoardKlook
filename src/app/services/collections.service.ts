import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Hotel } from '../ViewModals/hotel';
import { Tours } from '../ViewModals/tours';
import { Wifi } from './../ViewModals/wifi';

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

  addTohotel(itemm: Hotel) {

    // console.log(itemm)
    this.fb.collection('Hotel-').add(itemm).then(function (docRef) {
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
    
    return this.fb.collection<Wifi>('Wifi_&_SimCards')
    .snapshotChanges();

  }

  getallHotel(){
    
    return this.fb.collection<Wifi>('Hotel-')
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

  deleteHotel(id:string|undefined) {
    return this.fb.collection("Hotel-").doc(id).delete();
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

  updateHotel(item: Tours){
    
    this.itemDoc = this.fb.doc(`Hotel-/${item.id}`);
    this.itemDoc.update(item);
  }
}
