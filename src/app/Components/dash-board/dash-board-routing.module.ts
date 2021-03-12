import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from '../admins/admins.component';
import { TourCollectionComponent } from '../login/tour-collection/tour-collection.component';
import { UsersComponent } from '../login/users/users.component';
import { WifiComponent } from '../login/wifi/wifi.component';

const routes: Routes = [
  // { path: 'users', component: UsersComponent },
  // { path: 'admin', component: AdminsComponent },
  // { path: 'tour', component: TourCollectionComponent },
  // { path: 'wifi', component: WifiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
