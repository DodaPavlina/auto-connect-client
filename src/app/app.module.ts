import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';
import { LoginRegisterPageComponent } from './pages/login-register-page/login-register-page.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    VehiclePageComponent,
    LoginRegisterPageComponent,
    VehicleDetailPageComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
