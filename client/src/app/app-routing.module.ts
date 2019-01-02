import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';

const routes:  Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '', component: DashboardComponent,  canActivate: [AuthGuardService] },
  { path: 'restaurant', component: RestaurantListComponent,  canActivate: [AuthGuardService] },
  { path: 'restaurant/:id', component: RestaurantDetailComponent, canActivate: [AuthGuardService]},
  { path: 'recommend', component: RecommendationListComponent, canActivate: [AuthGuardService]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
