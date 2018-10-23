package com.herokuapp.frs.dao;

import com.herokuapp.frs.entity.UserSession;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserSessionDAOImpl implements UserSessionDAO {

  @Autowired
  private SessionFactory sessionFactory;

  @Override
  public void createUserSession(UserSession session) {
    Session currentSession = sessionFactory.getCurrentSession();
    currentSession.saveOrUpdate(session);
  }

  @Override
  public void deleteUserSession(UserSession session) {
  }

  @Override
  public void updateUserSession(UserSession session) {
    Session currentSession = sessionFactory.getCurrentSession();
    currentSession.saveOrUpdate(session);
	}

  @Override
  public UserSession getSessionBySessionId(String uuid) {
    Session currentSession = sessionFactory.getCurrentSession();
    String hql = String.format("FROM UserSession WHERE session_id=\'%s\'", uuid);
    return currentSession.createQuery(hql, UserSession.class).uniqueResult();
  }

  @Override
  public UserSession getSessionByUserId(int userId) {
    Session currentSession = sessionFactory.getCurrentSession();
    String hql = String.format("FROM UserSession WHERE user_id=\'%s\'", userId);
    return currentSession.createQuery(hql, UserSession.class).uniqueResult();
  }
}