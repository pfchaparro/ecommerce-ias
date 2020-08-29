import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlServer } from '../../../environments/environment';
import * as routes from '../../shared/routes';
import { ProductI } from '../../shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = new BehaviorSubject<ProductI[]>([]);
  readonly products = this._products.asObservable();
  private localStorage = JSON.parse(localStorage.getItem('login'));

  constructor(private http: HttpClient) { }

  public getAllProduct() {
    return this.http.get(urlServer + routes.PRODUCT);
  }

  public getProduct(id: string) {
    return this.http.get(urlServer + routes.PRODUCT + '/' + id);
  }

  public deleteProduct(id: string): Observable<ProductI[]> {
    return this.http.delete<ProductI[]>(urlServer + routes.PRODUCT + '/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${this.localStorage.token}` })
    });
  }

  public editProduct(id: string): Observable<ProductI[]> {
    return this.http.put<ProductI[]>(urlServer + routes.PRODUCT + '/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${this.localStorage.token}` })
    });
  }
}
