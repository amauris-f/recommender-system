package com.herokuapp.frs.rest;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Item;
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


  @GetMapping("/restaurants/{id}")
  public Restaurant getRestaurant(@PathVariable int id, HttpServletRequest request){
    authorizeRequest(request);
    return restaurantService.getRestaurant(id);
  }

  @GetMapping("/restaurants/{id}/menu")
  public List<Item> getMenu(@PathVariable int id, HttpServletRequest request){
    authorizeRequest(request);
    return restaurantService.getMenu(id);
  }

  @GetMapping("/restaurants")
  public List<Restaurant> getAllRestaurants(HttpServletRequest request){
    authorizeRequest(request);
    return restaurantService.getAll();
  }
}