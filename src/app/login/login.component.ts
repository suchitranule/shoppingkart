import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nbits-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginDetails: any;
  constructor() {
    this.LoginDetails = {};
  }

  ngOnInit() {
  }
  Login(){
    console.log(this.LoginDetails);
  }

}
