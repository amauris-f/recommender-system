import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable, of, Subject } from 'rxjs';
import { SignupModel } from './signup-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = '/login';
  private signupUrl= '/signup';
  public user : User;
  private userSub: Subject<User> = new Subject<User>();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private httpClient : HttpClient) {
    this.userSub.subscribe(newUser=>{
      this.user = newUser
    });
   }

  login(login : LoginModel) : Observable<User>{
    return this.httpClient.post<User>(this.loginUrl, login, this.httpOptions);
  }

  signup(signup : SignupModel) : Observable<User>{
    return this.httpClient.post<User>(this.signupUrl, signup, this.httpOptions);
  }

  isAuthenticated() : Boolean {
    if (document.cookie.indexOf("JSESSION") >= 0){
      this.userSub.next(JSON.parse(localStorage.getItem("user")) as User);
      return true;
    }
    localStorage.removeItem("user");
    this.userSub.next(null);
    return false;
  }

  getUser() : User{
    return this.user;
  }

  logout(){
    localStorage.removeItem("user");
    this.deleteCookie();
    this.userSub.next(null);
  }

  private deleteCookie(){
    document.cookie = "JSESSION" + '=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
  }
}
