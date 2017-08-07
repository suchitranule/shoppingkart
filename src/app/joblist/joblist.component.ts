import { Component, OnInit } from '@angular/core';
import {Job} from './job';
import {JobService} from '../services/job.service';
@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent {
  Jobs:Array<Job>
  SelectedJob:Job
  ErrorHandler:any
  displayDetails(item){
    this.SelectedJob = item;
  }
  constructor(private jobsvc:JobService) {
      this.jobsvc.getJobs()
      .subscribe(res=>{
        this.Jobs=res
      },
    err=>{
      this.ErrorHandler=true;
    })
   }
}
