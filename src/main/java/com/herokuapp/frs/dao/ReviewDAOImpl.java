package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Review;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReviewDAOImpl implements ReviewDAO {

  @Autowired
  private SessionFactory sessionFactory;

	@Override
	public List<Review> getReviews(int userId) {
    Session session = sessionFactory.getCurrentSession();
    String hql = String.format("FROM Review WHERE user_id=\'%s\'", userId);
    List<Review> userReviews = session.createQuery(hql, Review.class).getResultList(); 
    return userReviews;
	}

  @Override
  public void saveReview(Review review) {
    Session session = sessionFactory.getCurrentSession();
    session.saveOrUpdate(review);
  }

}