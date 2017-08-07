import { Component, OnInit, Input } from '@angular/core';
import {ShopDataService} from "../services/shopData.service";

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
  @Input()
  foodDetail:any;
  ErrorHandler: any;
  public value: any[]=[];
  constructor(private ShopDataService : ShopDataService) {
    this.ShopDataService.getValue()
    .subscribe(
      products => {
      this.value.push(products);
      console.log(this.value);
  });
  }
  buynow(product){
    this.ShopDataService.setValue(product);
  }
  ngOnInit() {
  }

}
