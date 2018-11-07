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

  @Override
  public List<Review> getUserRestaurantReviews(int userId, int restaurantId) {
    Session session = sessionFactory.getCurrentSession();
    String sql = "SELECT coalesce(id,-1) as id, coalesce(user_id, %d) as user_id,coalesce(rating,0) as rating, B.item_id FROM " +  
      "(SELECT * FROM recommender_system.review WHERE user_id=%d) A " +  
      "Right JOIN " +  
      "(SELECT id AS item_id FROM recommender_system.item WHERE restaurant_id = %d) B " +  
      "ON A.item_id = B.item_id";
    //String hql = String.format("FROM Review WHERE user_id=\'%s\' AND item.restaurant.id=\'%s\'", userId, restaurantId);
    //String hql = String.format("SELECT Review FROM (FROM Review WHERE user_id=\'%s\' AND item.restaurant.id=\'%s\') Right JOIN (FROM Item WHERE restaurant.id=\'%s\')", userId, restaurantId, restaurantId);
    //List<Review> reviews = session.createQuery(hql, Review.class).getResultList();
    List<Object[]> reviews = session.createNativeQuery(String.format(sql, userId, userId, restaurantId)).getResultList();
    for(Object[] rev : reviews){
      for(Object obj : rev){
        System.out.println(obj);
      }
    }
    return null;
  }

}