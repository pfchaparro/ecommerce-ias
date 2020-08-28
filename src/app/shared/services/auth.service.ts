import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../../../environments/environment';
import * as routes from '../../shared/routes';
import { UserI } from '../../shared/models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public login(user: UserI): Observable<any> {
    return this.http.post(urlServer + routes.LOGIN, user);
  }

  public logout(): Observable<any> {
    return this.http.post(urlServer + routes.LOGOUT, '');
  }
}
