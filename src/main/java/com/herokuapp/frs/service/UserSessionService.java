package com.herokuapp.frs.service;

import com.herokuapp.frs.entity.User;
import com.herokuapp.frs.entity.UserSession;

public interface UserSessionService {
  public void createUserSession(User user, String uuid, int expiry);
  public void updateUserSession(User user, String uuid, int expiry);
  public void deleteUserSession(User user, String uuid);
  public UserSession getUserSessionBySessionId(String uuid);
  public UserSession getUserSessionByUserId(int userId);

}