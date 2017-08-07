import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserModule}  from "../user/user.module";
import {RouterModule} from "@angular/router";
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JoblistComponent } from './joblist/joblist.component';
import {JobdetailComponent} from "./jobdetail/jobdetail.component";

import {JobService} from "./services/job.service";
import {UserService} from "./services/user.service";
import {FoodService} from "./services/food.service";
import {ShopDataService} from "./services/shopData.service";

import { DropdownComponent } from './dropdown/dropdown.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    RegisterComponent,
    JoblistComponent,
    JobdetailComponent,
    DropdownComponent,
    HomeComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    HttpModule,
    RouterModule.forRoot([{path:"login",component:LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //sets default routing
  {path:"register",component:RegisterComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:"Cakes",component:FoodDetailsComponent}
  ]},

  {path:'jobs',component:JoblistComponent,
   children:[
     {path:"jobdetail",component:JobdetailComponent}
   ]}
])
  ],
  providers: [JobService,UserService,FoodService,ShopDataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
