package com.herokuapp.frs.rest;

import java.time.ZonedDateTime;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.User;
import com.herokuapp.frs.entity.UserSession;
import com.herokuapp.frs.exception.InvalidCredentialsException;
import com.herokuapp.frs.exception.UnauthorizedException;
import com.herokuapp.frs.service.UserSessionService;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class RestController {
  @Autowired
  protected UserSessionService userSessionService;

  private UserSession getCookie(HttpServletRequest request){
    Cookie[] cookies = (request.getCookies() != null) ? request.getCookies() : new Cookie[0];
    System.out.println(cookies);
    UserSession session = null;
    for(Cookie cookie : cookies){
      if(cookie.getName().equals("JSESSION")){
        session = userSessionService.getUserSessionBySessionId(cookie.getValue());
      }
    }
    if(session == null){
      throw new InvalidCredentialsException("No cookie provided");
    } else if (session.getExpiration().isBefore(ZonedDateTime.now())){
      throw new InvalidCredentialsException("Session Ended");
    }
    return session;
  }
  
  protected UserSession authorizeRequest(HttpServletRequest request, int userId){
    UserSession session = getCookie(request);
    if(session.getUser().getId() != userId){
      throw new UnauthorizedException("Unauthorized"); 
    }
    return session;
  }

  protected UserSession authorizeRequest(HttpServletRequest request){
    UserSession session = getCookie(request);
    return session;
  }

  protected UserSession authorizeRequest(HttpServletRequest request, User user){
    UserSession session = getCookie(request);
    if(session.getUser().getId() != user.getId()){
      throw new UnauthorizedException("Unauthorized"); 
    }
    return session;
  }
}