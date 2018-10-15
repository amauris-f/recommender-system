package com.herokuapp.frs.rest;

import com.herokuapp.frs.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{

  @Autowired
  private UserService userService;

}