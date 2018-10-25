package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Item;

public interface ItemDAO {
  public Item getItem(int itemId);
  public List<Item> getMenu(int restaurantId);
}