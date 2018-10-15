package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.User;

public interface UserDAO {

  public List<User> getUsers();

  public User getUser(int id);

  public void saveUser(User user);

  public User  getUserByUsername(String username);
}