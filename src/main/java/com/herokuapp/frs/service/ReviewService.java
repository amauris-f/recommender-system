package com.herokuapp.frs.service;

import java.util.List;

import com.herokuapp.frs.entity.Review;

public interface ReviewService {

  public List<Review> getRecentReviews(int userId);

  public List<Review> getAllReviews(int userId);

  public void saveReview(Review review);
}