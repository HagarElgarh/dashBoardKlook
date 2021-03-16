import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
// import { AppRoutingModule } from './dash-board-routing.module';


import { DashbordMainComponent } from '../login/dashbord-main/dashbord-main.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
// import { NavcontrolDispalyDirective } from './directive/navcontrol-dispaly.directive';


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
import { AdminsComponent } from '../admins/admins.component';
import { TourCollectionComponent } from '../login/tour-collection/tour-collection.component';
import { CitiesComponent } from '../login/cities/cities.component';
import { WifiComponent } from '../login/wifi/wifi.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../login/users/users.component';
import { DashdetailsComponent } from '../login/dashdetails/dashdetails.component';
import { UserComponent } from '../login/user/user.component';
import { GuardAuthService } from 'src/app/services/guard-auth.service.guard';
import { HotelComponent } from '../login/hotel/hotel.component';

const routes: Routes = [
  { path: 'main', component: DashbordMainComponent ,canActivate: [GuardAuthService] },
  // { path: 'users', component: UsersComponent },
  // { path: 'admin', component: AdminsComponent },
  // { path: 'tour', component: TourCollectionComponent },
  // { path: 'wifi', component: WifiComponent },
];

@NgModule({
  declarations: [DashbordMainComponent,

    AdminsComponent,
    TourCollectionComponent,
    CitiesComponent,
    WifiComponent,
    DashdetailsComponent,
    UsersComponent,
    UserComponent,
    HotelComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    FormsModule, ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    CommonModule,
    DashBoardRoutingModule
  ]
})
export class DashBoardModule { }
