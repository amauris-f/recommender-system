package com.herokuapp.frs.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class SignupModel {

  @Pattern(regexp="[a-zA-Z0-9_]+", message="*Must contain only alphnumeric characters and underscores(_)")
  @NotNull
  private String username;
  @Email(message="Incorrect Email format")
  @NotBlank(message="Email must not be blank")
  private String email;
  @Size(min=8,max=16, message="Password length must be between 8 and 16 characters")
  private String password;

  public String getEmail() {
    return email;
  }

  public String getUsername() {
    return username;
  }


  public String getPassword() {
    return password;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}