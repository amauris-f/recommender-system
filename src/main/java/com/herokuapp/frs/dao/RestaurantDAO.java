package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Item;
import com.herokuapp.frs.entity.Restaurant;

public interface RestaurantDAO {
   public Restaurant getRestaurant(int id);
   public List<Restaurant> getAll();
   public List<Item> getMenu(int id);
}