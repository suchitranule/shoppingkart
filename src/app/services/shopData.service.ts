import {Injectable} from "@angular/core";
import {Observable,BehaviorSubject} from 'rxjs';

@Injectable()
export class ShopDataService {
private products: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor() {
  }
  public setValue(value):void {
          this.products.next(value);
      }

  public getValue():Observable<any[]> {
          return this.products;
  }

}
