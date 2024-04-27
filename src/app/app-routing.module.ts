import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {VehiclePageComponent} from "./pages/vehicle-page/vehicle-page.component";
import { LoginRegisterPageComponent } from './pages/login-register-page/login-register-page.component';
import {VehicleDetailPageComponent} from "./pages/vehicle-detail-page/vehicle-detail-page.component";




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'vehicles', component: VehiclePageComponent},
  {path: 'login', component: LoginRegisterPageComponent},
  {path: 'login-register/:id', component: LoginRegisterPageComponent},
  {path: 'vehicle-detail/:id', component: VehicleDetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
