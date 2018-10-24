package com.herokuapp.frs.service;

import javax.transaction.Transactional;

import com.herokuapp.frs.dao.RestaurantDAO;
import com.herokuapp.frs.entity.Restaurant;

import org.springframework.beans.factory.annotation.Autowired;

public class RestaurantServiceImpl implements RestaurantService {

  @Autowired
  private RestaurantDAO restaurantDao;

  @Override
  @Transactional
  public Restaurant getRestaurant(int id) {
		return restaurantDao.getRestaurant(id);
	}

}