package com.herokuapp.frs.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  private int id;

  @Column(name="username")
  private String username;

  @Column(name="email")
  private String email;

  public void setId(int id) {
    this.id = id;
  }
  
  public int getId() {
    return id;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getUsername() {
    return username;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  
  public String getEmail() {
    return email;
  }

}