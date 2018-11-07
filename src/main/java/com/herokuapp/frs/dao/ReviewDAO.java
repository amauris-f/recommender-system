package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Review;

public interface ReviewDAO {
  public List<Review> getReviews(int id);
  public void saveReview(Review review);
}