import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {Observable} from 'Rxjs';
import 'rxjs';
@Injectable()
export class UserService {
  constructor(private http: Http) {

  }
  getCountries(): Observable<any> {
    let url = "http://localhost:3000/users/countries";
    return this.http.get(url)
      .map(response => response.json(),
      error => error.json());
  }
  register(userInfo):Observable<any> {
    let url="http://localhost:3000/users/register";
    return this.http.post(url,{data:userInfo})
      .map(response => response.json(),
      error => error.json());
  }
  login() {
  }
  logout() {
  }

}
