package com.herokuapp.frs.rest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Review;
import com.herokuapp.frs.entity.User;
import com.herokuapp.frs.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reviews")
public class ReviewController extends com.herokuapp.frs.rest.RestController {

  @Autowired
  private ReviewService reviewService;

  @GetMapping("/recent/{id}")
  public List<Review> getRecentReviews(@PathVariable int id, HttpServletRequest request) {
    authorizeRequest(request, id);
    return reviewService.getRecentReviews(id);
  }

}