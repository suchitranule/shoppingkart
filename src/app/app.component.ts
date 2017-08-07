import { Component } from '@angular/core';
import {ShopDataService} from "./services/shopData.service";


@Component({
  selector: 'app-root',
  providers: [ShopDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
