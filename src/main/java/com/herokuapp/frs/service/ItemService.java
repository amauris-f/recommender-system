package com.herokuapp.frs.service;

import java.util.List;

import com.herokuapp.frs.entity.Item;

public interface ItemService {
  public Item getItem(int itemId);
  public List<Item> getMenu(int restaurantId);
}