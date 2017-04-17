import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';

const routes: Routes = [
 /* { path: '', redirectTo: '/profile', pathMatch: 'full'},*/
  { path: '', component: ProfileComponent},
  { path: 'detail/:id', component: ProfileDetailComponent },
  { path: 'detail', redirectTo: '/detail/1', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
