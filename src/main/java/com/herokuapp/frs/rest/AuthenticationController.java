package com.herokuapp.frs.rest;

import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.herokuapp.frs.entity.User;
import com.herokuapp.frs.exception.InvalidCredentialsException;
import com.herokuapp.frs.model.SignupModel;
import com.herokuapp.frs.model.UserLogin;
import com.herokuapp.frs.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

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

  @GetMapping("/login")
  public ModelAndView login(){
    ModelAndView mav = new ModelAndView();
    mav.setViewName("index");
    return mav;
  }

  @GetMapping("/signup")
  public ModelAndView signup(){
    ModelAndView mav = new ModelAndView();
    mav.setViewName("index");
    return mav;
  }

  @PostMapping("/signup")
  public User signup(@Valid @RequestBody SignupModel signup, Errors errors, HttpServletResponse response){
    if(errors.hasErrors()){
      StringBuilder messages = new StringBuilder();
      messages.append("ERROR: "); 
      for(ObjectError err : errors.getAllErrors()){
        messages.append(err.getDefaultMessage());
        messages.append(";");
      }
      throw new InvalidCredentialsException(messages.toString());
    }
    User user = userService.getUserByUsername(signup.getUsername());
    if(user != null){
      throw new InvalidCredentialsException("Username already in use");
    }
    user = new User(signup.getUsername(), signup.getEmail(), signup.getPassword());
    userService.saveUser(user);
    String uuid = UUID.randomUUID().toString();
    Cookie cookie = new Cookie("JSESSION", uuid);
    int expiry = 60 * 5;
    cookie.setMaxAge(expiry);
    response.addCookie(cookie);
    userSessionService.createUserSession(user, uuid, expiry);
    return user;
  }
}