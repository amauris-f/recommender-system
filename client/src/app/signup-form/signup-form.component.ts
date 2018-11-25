import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponseBody } from '../error-response-body';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private router : Router) {   }
  public message : String;

  ngOnInit() {
  }

  onSubmit(ngform : NgForm){
    this.authenticationService.signup(ngform.value).subscribe(user =>{
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
