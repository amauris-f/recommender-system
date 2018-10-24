package com.herokuapp.frs.rest;

import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Restaurant;
import com.herokuapp.frs.service.RestaurantService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
public class RestaurantController extends com.herokuapp.frs.rest.RestController{

  @Autowired
  private RestaurantService restaurantService;


  @GetMapping("/restaurant/{id}")
  public Restaurant getRestaurant(@PathVariable int id, HttpServletRequest request){
    authorizeRequest(request);
    return restaurantService.getRestaurant(id);
  }

}