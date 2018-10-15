package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.User;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {

  @Autowired
  private SessionFactory sessionFactory;

  @Override
  public List<User> getUsers() {
    Session session = sessionFactory.getCurrentSession();
    Query<User> query = session.createQuery("from User", User.class);
    return query.getResultList();
  }

  @Override
  public User getUser(int id) {
    Session session = sessionFactory.getCurrentSession();
     return session.get(User.class, id);
  }

	@Override
	public void saveUser(User user) {
    Session session = sessionFactory.getCurrentSession();
    session.saveOrUpdate(user);
	}

  @Override
  public User getUserByUsername(String username) {
    Session session = sessionFactory.getCurrentSession();
    String hql = String.format("FROM User WHERE username=\'%s\'",username);
    return (User)session.createQuery(hql).uniqueResult();
  }

}