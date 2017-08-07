import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Job} from "../joblist/job"
@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})
export class JobdetailComponent implements OnInit {
  @Input()
  JobDetail:Job

  constructor(public router:Router) {
    this.JobDetail = new Job();
   }

  ngOnInit() {
  }

}
