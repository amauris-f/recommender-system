package com.herokuapp.frs.service;

import java.util.List;

import javax.transaction.Transactional;

import com.herokuapp.frs.dao.RestaurantDAO;
import com.herokuapp.frs.entity.Item;
import com.herokuapp.frs.entity.Restaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantServiceImpl implements RestaurantService {

  @Autowired
  private RestaurantDAO restaurantDao;

  @Override
  @Transactional
  public Restaurant getRestaurant(int id) {
    return restaurantDao.getRestaurant(id);
  }

  @Override
  @Transactional
  public List<Restaurant> getAll() {
	return restaurantDao.getAll();
  }

  @Transactional
  @Override
  public List<Item> getMenu(int id) {
    return restaurantDao.getMenu(id);
  }

}