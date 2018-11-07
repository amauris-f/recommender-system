package com.herokuapp.frs.rest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Review;
import com.herokuapp.frs.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController extends com.herokuapp.frs.rest.RestController {

  @Autowired
  private UserService userService;

  @GetMapping("/users/{userId}/reviews/restaurants/{restId}")
  public List<Review> getUserRestaurantReviews(@PathVariable int userId, @PathVariable int restId, HttpServletRequest request) {
    authorizeRequest(request, userId);
    return userService.getRestaurantReviews(userId, restId);
  }

  @GetMapping("/users/{userId}/reviews/recent")
  public List<Review> getRecentReviews(@PathVariable int userId, HttpServletRequest request) {
    authorizeRequest(request, userId);
    return userService.getRecentReviews(userId);
  }
}