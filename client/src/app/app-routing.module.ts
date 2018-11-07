import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes:  Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: DashboardComponent,  canActivate: [AuthGuardService] },
  { path: 'restaurant', component: RestaurantListComponent,  canActivate: [AuthGuardService] },
  { path: 'restaurant/:id', component: RestaurantDetailComponent, canActivate: [AuthGuardService]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
