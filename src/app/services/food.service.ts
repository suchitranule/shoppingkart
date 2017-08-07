import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Observable} from 'Rxjs';
import 'rxjs';
@Injectable()
export class FoodService {
  constructor(private http: Http) {

  }
  getFood(): Observable<any> {
    let url = "http://localhost:3000/food";
    return this.http.get(url)
      .map(response => response.json(),
      error => error.json());
  }
}
