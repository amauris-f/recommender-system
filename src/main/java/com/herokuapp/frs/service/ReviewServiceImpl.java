package com.herokuapp.frs.service;

import java.util.List;

import javax.transaction.Transactional;

import com.herokuapp.frs.dao.ReviewDAO;
import com.herokuapp.frs.entity.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {
  @Autowired
  private ReviewDAO reviewDAO;


  @Override
  @Transactional
  public List<Review> getRecentReviews(int userId) {
    List<Review> reviews = reviewDAO.getReviews(userId);
    int numReviews = reviews.size();
    if(numReviews >=5){
      return reviews.subList(0, 5);
    } else if(numReviews > 0){
      return reviews.subList(0, numReviews);
    }
    return reviews;
  }

  @Override
  @Transactional
	public List<Review> getAllReviews(int userId) {
		return reviewDAO.getReviews(userId);
  }

  @Override
  @Transactional
  public void saveReview(Review review) {
    reviewDAO.saveReview(review);
  }

  @Override
  @Transactional
  public List<Review> getUserRestaurantReviews(int userId, int restaurantId) {
    return reviewDAO.getUserRestaurantReviews(userId, restaurantId);
  }

}