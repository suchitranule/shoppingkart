import { Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {ShopDataService} from "../services/shopData.service";

@Component({
  selector: 'nbits-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  Userdetails:any;
  Countries:Array<any>;
  YearList:any;
  MonthList:any;
  public value: any[];

  constructor(private userSvc:UserService,private ShopDataService:ShopDataService) {
  this.value = [];
  this.ShopDataService.getValue()
  .subscribe(
    products => {
    this.value.push(products);
    console.log(this.value);
});
    this.Userdetails={};
    this.YearList =[{text:"2017",value:2017},{text:"2016",value:2016}];
    this.MonthList =[{text:"Jan",value:1},{text:"Feb",value:2}];
  /*  this.Countries=[{name:"India",code:"IN"},{name:"United States",code:"USA"}];*/
     this.userSvc.getCountries()
     .subscribe(result=>{
       this.Countries= result;
     },
   error=>{
     console.log(error);
   })
   }

   registerUser(){
     this.userSvc.register(this.Userdetails)
     .subscribe(res=>{
       console.log(res);
     },
   err=>{
     console.log(err);
   })

   }

   test(){
     console.log("Key pressed");
   }
   countryChanged(){
     console.log(this.Userdetails.country);
   }
}
