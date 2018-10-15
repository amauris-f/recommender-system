package com.herokuapp.frs.rest;


import com.herokuapp.frs.exception.InvalidCredentialsException;
import com.herokuapp.frs.exception.InvalidCredentialsResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserExceptionHandling{

  @ExceptionHandler
  public ResponseEntity<InvalidCredentialsResponse> invalidException(InvalidCredentialsException exc){

    InvalidCredentialsResponse response = new InvalidCredentialsResponse();
    response.setStatus(HttpStatus.UNAUTHORIZED.value());
    response.setMessage(exc.getMessage());
    response.setTimeStamp(System.currentTimeMillis());

    return new ResponseEntity<InvalidCredentialsResponse>(response, HttpStatus.UNAUTHORIZED);
  }
}