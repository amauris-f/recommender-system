import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';


  public isAuthenticated() : boolean {
    if (document.cookie.indexOf("JSESSION") >= 0){
      return true;
    }
    localStorage.removeItem("user");
    return false;
  }
}
