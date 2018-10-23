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
public class AuthenticationController extends com.herokuapp.frs.rest.RestController {

  @Autowired
  private UserService userService;

  @PostMapping("/login")
  public User login(@RequestBody UserLogin userLogin, HttpServletResponse response){
    User user = userService.validOrNull(userLogin.getUsername(), userLogin.getPassword());
    if(user == null){
      throw new InvalidCredentialsException("Invalid username or password");
    }
    String uuid = UUID.randomUUID().toString();
    Cookie cookie = new Cookie("JSESSION", uuid);
    int expiry = 60 * 5;
    cookie.setMaxAge(expiry);
    response.addCookie(cookie);
    userSessionService.createUserSession(user, uuid, expiry);
    return user;
  }

}