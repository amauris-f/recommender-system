package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Review;
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
    session.save(user);
	}

  @Override
  public User getUserByUsername(String username) {
    Session session = sessionFactory.getCurrentSession();
    String hql = String.format("FROM User WHERE username=\'%s\'",username);
    return (User) session.createQuery(hql).uniqueResult();
  }

  @Override
  public List<Review> getRestaurantReviews(int userId, int restId) {
    Session session = sessionFactory.getCurrentSession();
    String hql = String.format("FROM Review WHERE user_id=\'%s\' AND item.restaurant.id=\'%s\'", userId, restId);
    return session.createQuery(hql, Review.class).getResultList();
  }

  @Override
  public List<Review> getReviews(int userId) {
    Session session = sessionFactory.getCurrentSession();
    String hql = String.format("FROM Review WHERE user_id=\'%s\' ORDER BY id DESC", userId);
    List<Review> userReviews = session.createQuery(hql, Review.class).getResultList(); 
    return userReviews;  
  }

}