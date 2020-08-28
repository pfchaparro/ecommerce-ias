import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../../../environments/environment';
import * as routes from '../../shared/routes';
import { ProductI } from '../../shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = new BehaviorSubject<ProductI[]>([]);
  readonly products = this._products.asObservable();

  constructor(private http: HttpClient) { }

  /*public getAllProduct() {
    this.http.get(urlServer + routes.PRODUCT).subscribe(
      data => {
        this.dataStore.products = data;
        this._products.next(Object.assign({}, this.dataStore).products);
      },
      error => console.log('Could not load products.')
    );
  }
  */
  public getAllProduct(){
    return this.http.get(urlServer + routes.PRODUCT);
  }

  public getProduct(id: string){
    return this.http.get(urlServer + routes.PRODUCT + '/' + id);
  }
}
