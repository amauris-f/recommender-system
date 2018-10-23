package com.herokuapp.frs.exception;

public class UnauthorizedException extends RuntimeException{

  private static final long serialVersionUID = 1L;

  public UnauthorizedException(String message, Throwable cause){
    super(message, cause);
  }

  public UnauthorizedException(String message){
    super(message);
  }

  public UnauthorizedException(Throwable cause){
    super(cause);
  }
}