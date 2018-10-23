package com.herokuapp.frs.exception;

public class UnauthorizedResponse{
  private int status;
  private String message;
  private long timeStamp;

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