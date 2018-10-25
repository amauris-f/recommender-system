package com.herokuapp.frs.recommendersystem;

import com.herokuapp.frs.dao.ItemDAO;
import com.herokuapp.frs.dao.ItemDAOImpl;
import com.herokuapp.frs.dao.RestaurantDAO;
import com.herokuapp.frs.dao.RestaurantDAOImpl;
import com.herokuapp.frs.dao.ReviewDAO;
import com.herokuapp.frs.dao.ReviewDAOImpl;
import com.herokuapp.frs.dao.UserDAO;
import com.herokuapp.frs.dao.UserDAOImpl;
import com.herokuapp.frs.dao.UserSessionDAO;
import com.herokuapp.frs.dao.UserSessionDAOImpl;
import com.herokuapp.frs.service.ItemService;
import com.herokuapp.frs.service.ItemServiceImpl;
import com.herokuapp.frs.service.RestaurantService;
import com.herokuapp.frs.service.RestaurantServiceImpl;
import com.herokuapp.frs.service.ReviewService;
import com.herokuapp.frs.service.ReviewServiceImpl;
import com.herokuapp.frs.service.UserService;
import com.herokuapp.frs.service.UserServiceImpl;
import com.herokuapp.frs.service.UserSessionService;
import com.herokuapp.frs.service.UserSessionServiceImpl;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig{

  @Bean
  public UserDAO userDao(){
    return new UserDAOImpl();
  }

  @Bean
  public UserService userService(){
    return new UserServiceImpl();
  }

  @Bean
  public ReviewService reviewService(){
    return new ReviewServiceImpl();
  }

  @Bean
  public ReviewDAO reviewDAO(){
    return new ReviewDAOImpl();
  }

  @Bean
  public UserSessionService userSessionService(){
    return new UserSessionServiceImpl();
  }

  @Bean
  public UserSessionDAO userSessionDAO(){
    return new UserSessionDAOImpl();
  }

  @Bean
  public RestaurantService restaurantService(){
    return new RestaurantServiceImpl();
  }

  @Bean
  public RestaurantDAO restaurantDao(){
    return new RestaurantDAOImpl();
  }

  @Bean
  public ItemDAO itemDao(){
    return new ItemDAOImpl();
  }

  @Bean
  public ItemService itemService(){
    return new ItemServiceImpl();
  }
}