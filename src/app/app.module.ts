import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignComponent } from './Components/login/sign/sign.component';

import { AMlistComponent } from './Lists/amlist/amlist.component';
import { PMlistComponent } from './Lists/pmlist/pmlist.component';
// import { UsersComponent } from './Components/login/users/users.component';
import { NotFoundComponent } from './Components/login/not-found/not-found.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// import { DashbordMainComponent } from './Components/login/dashbord-main/dashbord-main.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material/icon';
import { NavcontrolDispalyDirective } from './directive/navcontrol-dispaly.directive';


import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AdminsComponent } from './Components/admins/admins.component';
// import { TourCollectionComponent } from './Components/login/tour-collection/tour-collection.component';
// import { CitiesComponent } from './Components/login/cities/cities.component';
// import { WifiComponent } from './Components/login/wifi/wifi.component';




var firebaseConfig = {
  apiKey: "AIzaSyANt9EaAeiNpKJTFH577SVmvPItb8OTAmk",
  authDomain: "friendlychat-e399d.firebaseapp.com",
  databaseURL: "https://friendlychat-e399d-default-rtdb.firebaseio.com",
  projectId: "friendlychat-e399d",
  storageBucket: "friendlychat-e399d.appspot.com",
  messagingSenderId: "402072663413",
  appId: "1:402072663413:web:b045d045b9b5af218f8f3c",
  measurementId: "G-SE1DJ8PYYC"
};

// var firebaseConfig = {
//   apiKey: "AIzaSyAzBJKDiRHQ0pgh52rSMCh_jvV5CBRwdCI",
//   authDomain: "klooktest-520cb.firebaseapp.com",
//   projectId: "klooktest-520cb",
//   storageBucket: "klooktest-520cb.appspot.com",
//   messagingSenderId: "486005586729",
//   appId: "1:486005586729:web:7ced86ac11b96f1c9ad538"
// };



@NgModule({
  declarations: [
    AppComponent,
    // DashbordMainComponent,
    SignComponent,
    NavcontrolDispalyDirective,
    NotFoundComponent,
    AMlistComponent,
    PMlistComponent,
    // UsersComponent,
    // DashdetailsComponent,
    // AdminsComponent,
    // TourCollectionComponent,
    // CitiesComponent,
    // WifiComponent
  ],
  imports: [
    // FormsModule, ReactiveFormsModule,

    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // BrowserAnimationsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule ,

    // MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
