package com.herokuapp.frs.service;

import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;

import javax.transaction.Transactional;

import com.herokuapp.frs.dao.UserSessionDAO;
import com.herokuapp.frs.entity.User;
import com.herokuapp.frs.entity.UserSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSessionServiceImpl implements UserSessionService {
  @Autowired
  private UserSessionDAO userSessionDAO;

  @Override
  @Transactional
  public void createUserSession(User user , String uuid, int expiry) {
    UserSession userSession = new UserSession();
    if(userSessionDAO.getSessionByUserId(user.getId()) == null){
      userSession.setSessionId(uuid);
      userSession.setUser(user);
      userSession.setExpiration(ZonedDateTime.now().plus(expiry, ChronoUnit.SECONDS));
      userSessionDAO.createUserSession(userSession);
    } else {
      updateUserSession(user, uuid, expiry);
    }
  }

  @Override
  @Transactional
  public void updateUserSession(User user, String uuid, int expiry) {
    UserSession userSession = userSessionDAO.getSessionByUserId(user.getId());
    userSession.setSessionId(uuid);
    userSession.setExpiration(ZonedDateTime.now().plus(expiry, ChronoUnit.SECONDS));
    userSessionDAO.updateUserSession(userSession);
  }

  @Override
  @Transactional
  public void deleteUserSession(User user, String uuid) {
    UserSession userSession = userSessionDAO.getSessionByUserId(user.getId());
    userSessionDAO.deleteUserSession(userSession);
	}

  @Override
  @Transactional
  public UserSession getUserSessionBySessionId(String uuid) {
    return userSessionDAO.getSessionBySessionId(uuid);
  }

  @Override
  @Transactional
  public UserSession getUserSessionByUserId(int userId) {
    return userSessionDAO.getSessionByUserId(userId);
  }

}