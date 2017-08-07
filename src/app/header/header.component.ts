import {Component,Input,OnInit} from '@angular/core';
import {ShopDataService} from "../services/shopData.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
//Decorate
@Component({
  selector: "nbits-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],

})
export class HeaderComponent {
  Tabs: Array<any>;
  cart:any[];
  message:any;
  public value: any[]=[];
  constructor(private ShopDataService : ShopDataService) {
      this.ShopDataService.getValue()
      .subscribe(
        products => {
        this.value.push(products);
        console.log(this.value);
    });
    this.Tabs = [{ name: "home", display: "Home" },
      { name: "login", display: "Login" },
      { name: "carts", display: "Carts" }
    ];
  }

  ngOnInit() {

    console.log("onInit::"+ this.value);

  }

}
