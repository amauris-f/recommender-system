package com.herokuapp.frs.rest;


import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Review;
import com.herokuapp.frs.exception.OKResponse;
import com.herokuapp.frs.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

  @PostMapping("/reviews")
  public ResponseEntity<OKResponse> createReview(@RequestBody Review review, HttpServletRequest request){
    authorizeRequest(request, review.getUser());
    reviewService.saveReview(review);
    OKResponse response = new OKResponse(HttpStatus.OK.value(),"Review was saved!");
    return new ResponseEntity<OKResponse>(response, HttpStatus.OK);    
  }

  @PutMapping("/reviews/{userId}")
  public ResponseEntity<OKResponse> updateReview(@RequestBody Review review, @PathVariable int userId, HttpServletRequest request){
    authorizeRequest(request, userId);
    reviewService.saveReview(review);
    OKResponse response = new OKResponse(HttpStatus.OK.value(),"Review was updated!");
    return new ResponseEntity<OKResponse>(response, HttpStatus.OK);
  }

}