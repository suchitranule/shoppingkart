import {Injectable} from'@angular/core';
import {Job} from "../joblist/job";
import {Http} from "@angular/http";
import {Observable} from 'Rxjs';
import 'rxjs';
@Injectable()
export class JobService{
  private Jobs:Array<Job>;
    constructor(private http:Http){

  }
  getJobs():Observable<any>{
    return this.http.get("http://localhost:3000/jobs")
    .map(res=>res.json(),
    err=>err.json());
  }
  selectedJobs(){

  }
}
