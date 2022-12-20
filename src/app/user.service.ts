import { Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user_id: string, user_password: string) {
    let body = new HttpParams();
    body = body.set('id', user_id);
    body = body.set('password', user_password);
    return this.http.post("https://ubaya.fun/hybrid/160420016/webservices/login.php", body);
  }
}
