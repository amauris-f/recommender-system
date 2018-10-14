package com.herokuapp.frs.entity;

import java.time.ZonedDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_session")
public class Session{

  @Id
  @Column(name="id")
  private int id;

  @Column(name="session_id")
  private String sessionId;

  @OneToOne
  @JoinColumn(name="user_id")
  private User user;

  @Column(name="expiration")
  private ZonedDateTime expiration;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public ZonedDateTime getExpiration() {
    return expiration;
  }

  public void setExpiration(ZonedDateTime expiration) {
    this.expiration = expiration;
  }

  public String getSessionId() {
    return sessionId;
  }

  public void setSessionId(String sessionId) {
    this.sessionId = sessionId;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }
}