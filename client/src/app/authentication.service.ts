import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = '/login'
  private user : User;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private httpClient : HttpClient) { }

  login(login : LoginModel) : Observable<User>{
    return this.httpClient.post<User>(this.loginUrl, login, this.httpOptions);
  }

  isAuthenticated() : Boolean {
    if (document.cookie.indexOf("JSESSION") >= 0){
      this.user = JSON.parse(localStorage.getItem("user")) as User;
      return true;
    }
    localStorage.removeItem("user");
    return false;
  }

  getUser() : User{
    return this.user;
  }
}
