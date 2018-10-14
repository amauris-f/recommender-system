package com.herokuapp.frs.recommendersystem;

import com.herokuapp.frs.dao.UserDAO;
import com.herokuapp.frs.dao.UserDAOImpl;
import com.herokuapp.frs.service.UserService;
import com.herokuapp.frs.service.UserServiceImpl;

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

}