package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Item;

import org.hibernate.query.NativeQuery;

public interface ItemDAO {
  public Item getItem(int itemId);
  public List<Item> getRecommendedItems(List<Integer> itemIds);
  public List<Item> getMenu(int restaurantId);
  public void ddlQuery(String statement);
  public NativeQuery<?> selectQuery(String statement);
}