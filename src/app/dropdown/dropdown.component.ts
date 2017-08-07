import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  items:any

  selectedValue:any;

  OnValueChange:EventEmitter<any> = new EventEmitter<any>()
  constructor() {
    this.items=[{text:"Please Select",value:"0"}]
  }

  ngOnInit() {
  }
  valueChanged(){
    console.log(this.selectedValue);
    this.OnValueChange.emit(this.selectedValue);

  }

}
