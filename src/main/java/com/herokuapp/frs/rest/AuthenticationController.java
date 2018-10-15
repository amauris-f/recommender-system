package com.herokuapp.frs.rest;

import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import com.herokuapp.frs.entity.User;
import com.herokuapp.frs.exception.InvalidCredentialsException;
import com.herokuapp.frs.model.UserLogin;
import com.herokuapp.frs.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

  @Autowired
  private UserService userService;

  @PostMapping("/login")
  public User login(@RequestBody UserLogin userLogin, HttpServletResponse response){
    User user = userService.validOrNull(userLogin.getUsername(), userLogin.getPassword());
    if(user == null){
      throw new InvalidCredentialsException("Invalid username or password");
    }
    Cookie cookie = new Cookie("JSESSION", UUID.randomUUID().toString());
    cookie.setMaxAge(60 * 5);
    response.addCookie(cookie);
    return user;
  }

}