package com.herokuapp.frs.rest;



import com.herokuapp.frs.exception.UnauthorizedException;
import com.herokuapp.frs.exception.UnauthorizedResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AuthorizationExceptionHandler{

  @ExceptionHandler
  public ResponseEntity<UnauthorizedResponse> invalidException(UnauthorizedException exc){

    UnauthorizedResponse response = new UnauthorizedResponse();
    response.setStatus(HttpStatus.FORBIDDEN.value());
    response.setMessage(exc.getMessage());
    response.setTimeStamp(System.currentTimeMillis());

    return new ResponseEntity<UnauthorizedResponse>(response, HttpStatus.FORBIDDEN);
  }
}