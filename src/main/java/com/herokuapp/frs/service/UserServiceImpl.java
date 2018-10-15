package com.herokuapp.frs.service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Base64;
import java.util.List;

import com.herokuapp.frs.dao.UserDAO;
import com.herokuapp.frs.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  UserDAO userDao;

  @Override
  @Transactional
  public List<User> getUsers() {
    return userDao.getUsers();
  }

  @Override
  @Transactional
  public User getUser(int id) {
    return userDao.getUser(id);
  }

  @Override
  @Transactional
	public void saveUser(User user) {
		userDao.saveUser(user);
	}

  @Override
  @Transactional
  public User validOrNull(String username, String password) {
    User user = userDao.getUserByUsername(username);
    if(user == null){
      return null;
    }
    String hashed = UserServiceImpl.hashPassword(password, user.getSalt());
    if(!user.getPassword().equals(hashed)){
      return null;
    }
    return user;
  }

  private static String hashPassword(String pass, String salt){
    pass += salt;
    try{
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] hash = digest.digest(pass.getBytes(StandardCharsets.UTF_8));
      pass = Base64.getEncoder().encodeToString(hash);
    }catch(Exception e){
      System.out.print(e.getMessage());
    }
    return pass;
  }

}