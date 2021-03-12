import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './Components/admins/admins.component';
import { DashbordMainComponent } from './Components/login/dashbord-main/dashbord-main.component';
import { NotFoundComponent } from './Components/login/not-found/not-found.component';
import { SignComponent } from './Components/login/sign/sign.component';
import { TourCollectionComponent } from './Components/login/tour-collection/tour-collection.component';
import { UsersComponent } from './Components/login/users/users.component';
import { WifiComponent } from './Components/login/wifi/wifi.component';
import { AMlistComponent } from './Lists/amlist/amlist.component';
import { PMlistComponent } from './Lists/pmlist/pmlist.component';

const routes: Routes = [
  // { path: 'List', component: DashbordMainComponent },
 
  { path: 'sign', component: SignComponent },
  { path: 'AMLists/:color', component: AMlistComponent },
  { path: 'PMLists/:color', component: PMlistComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'admin', component: AdminsComponent },
  // { path: 'tour', component: TourCollectionComponent },
  // { path: 'wifi', component: WifiComponent },

  {
    path: 'dash',
    loadChildren: () => import('../app/Components/dash-board/dash-board.module').then(m => m.DashBoardModule)
  },

  { path: '', redirectTo: '/admin', pathMatch: 'full' }, //Default Path
 
  
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
