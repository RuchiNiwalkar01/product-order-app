import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    ListRestaurantComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
