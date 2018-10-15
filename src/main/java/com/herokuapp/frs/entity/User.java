package com.herokuapp.frs.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user", schema="recommender_system")
public class User {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  @JsonIgnore
  private int id;

  @Column(name="username")
  private String username;

  @Column(name="email")
  private String email;

  @JsonIgnore
  @Column(name="password")
  private String password;

  @JsonIgnore
  @Column(name="salt")
  private String salt;

  @OneToMany(cascade=CascadeType.ALL, mappedBy="user")
  @JsonIgnore
  private List<Review> reviews;

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

  public List<Review> getReviews() {
    return reviews;
  }

  public void setReviews(List<Review> reviews) {
    this.reviews = reviews;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getSalt() {
    return salt;
  }

  public void setSalt(String salt) {
    this.salt = salt;
  }
}