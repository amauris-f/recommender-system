package com.herokuapp.frs.rest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Review;
import com.herokuapp.frs.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ReviewController extends com.herokuapp.frs.rest.RestController {

  @Autowired
  private ReviewService reviewService;

  @GetMapping("/review/recent/{id}")
  public List<Review> getRecentReviews(@PathVariable int id, HttpServletRequest request) {
    authorizeRequest(request, id);
    return reviewService.getRecentReviews(id);
  }

  @PostMapping("/review")
  public void createReview(@RequestBody Review review, HttpServletRequest request){
    authorizeRequest(request, review.getUser());
    review.setId(0);
    reviewService.saveReview(review);
  }

  @PutMapping("/review")
  public void updateReview(@RequestBody Review review, HttpServletRequest request){
    authorizeRequest(request, review.getUser());
    reviewService.saveReview(review);
  }

}