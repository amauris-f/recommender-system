import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ErrorResponseBody } from '../error-response-body';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router : Router) { }
  private user : User;
  public message : String;

  ngOnInit() {
  }

  onSubmit(ngform : NgForm){
    this.authenticationService.login(ngform.value).subscribe(user =>{
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(['']);
    },
    (err: HttpErrorResponse) => {
      if (err.status == 401){
        var body = err.error as ErrorResponseBody;
        this.message=body.message;
      }
    });
  }

}
