package com.herokuapp.frs.exception;

public class OKResponse{
  private int status;
  private String message;
  private long timeStamp;

  public OKResponse(){

  }

  public OKResponse(int status, String message){
    this.message = message;
    this.status = status;
  }

  public int getStatus() {
    return status;
  }

  public long getTimeStamp() {
    return timeStamp;
  }

  public void setTimeStamp(long timeStamp) {
    this.timeStamp = timeStamp;
  }

    public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public void setStatus(int status) {
    this.status = status;
  }
}