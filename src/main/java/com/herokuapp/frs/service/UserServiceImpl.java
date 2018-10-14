package com.herokuapp.frs.service;

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

}