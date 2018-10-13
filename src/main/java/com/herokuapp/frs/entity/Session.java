package com.herokuapp.frs.entity;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="session")
public class Session{

  @Column(name="session_id")
  private String sessionId;

  @OneToOne
  @JoinColumn(name="user_id")
  private User user;

  @Column(name="expiration")
  @Temporal(TemporalType.TIMESTAMP)
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
}