package com.herokuapp.frs.service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

import com.herokuapp.frs.dao.UserDAO;
import com.herokuapp.frs.entity.Review;
import com.herokuapp.frs.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {
  private static SecureRandom rand = new SecureRandom();

  @Autowired
  private UserDAO userDao;

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
    String salt = createSalt();
    user.setUsername(user.getUsername().toLowerCase());
    user.setEmail(user.getEmail().toLowerCase());
    user.setSalt(salt);
    String hashPass = hashPassword(user.getPassword(), salt);
    user.setPassword(hashPass);
		userDao.saveUser(user);
	}

  private String createSalt() {
    byte[] salt = new byte[32];
    rand.nextBytes(salt);
    return Base64.getEncoder().encodeToString(salt);
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

  
  @Transactional
  @Override
  public List<Review> getRestaurantReviews(int userId, int restId) {
    return userDao.getRestaurantReviews(userId, restId);
  }

  @Transactional
  @Override
  public List<Review> getRecentReviews(int userId) {
    List<Review> reviews = userDao.getReviews(userId);
    int numReviews = reviews.size();
    if(numReviews >=5){
      return reviews.subList(0, 5);
    } else if(numReviews > 0){
      return reviews.subList(0, numReviews);
    }
    return reviews;
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

  @Override
  @Transactional
  public User getUserByUsername(String username) {
    return userDao.getUserByUsername(username);
  }

}