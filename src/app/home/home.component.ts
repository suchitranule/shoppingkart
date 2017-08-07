import { Component, OnInit ,Input } from '@angular/core';
import {FoodService} from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
foods:Array<any>;
ErrorHandler:any;
Foodshow:any;
@Input()
selectedFood:any;
  constructor(private foodsvc:FoodService) {
        this.Foodshow=true;
        this.foodsvc.getFood()
        .subscribe(res=>{
          this.foods=res
        },
        err=>{
          this.ErrorHandler=true;
        })
  }
  displayFood(food){
    this.Foodshow = false;
    this.selectedFood = food.foodDetails;
    console.log(this.selectedFood.name)
  }
}
