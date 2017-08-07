import { Component} from '@angular/core';

@Component({
  selector: 'nbits-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  CompanyName:String
  constructor() {
    this.CompanyName="SHOP KART";
  }
}
