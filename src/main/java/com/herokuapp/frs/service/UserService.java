package com.herokuapp.frs.service;

import java.util.List;

import com.herokuapp.frs.entity.Review;
import com.herokuapp.frs.entity.User;

public interface UserService {

  public List<User> getUsers();

  public User getUser(int id);

  public void saveUser(User user);

  public User validOrNull(String username, String password);

  public List<Review> getRestaurantReviews(int userId, int restId);

  public List<Review> getRecentReviews(int id);
}