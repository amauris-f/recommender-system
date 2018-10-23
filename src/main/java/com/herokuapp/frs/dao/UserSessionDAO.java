package com.herokuapp.frs.dao;

import com.herokuapp.frs.entity.UserSession;

public interface UserSessionDAO {
  
  public void createUserSession(UserSession session);
  public void deleteUserSession(UserSession session);
  public void updateUserSession(UserSession session);
  public UserSession getSessionBySessionId(String uuid);
  public UserSession getSessionByUserId(int userId);
}