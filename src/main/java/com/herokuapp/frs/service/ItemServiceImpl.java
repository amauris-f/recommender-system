package com.herokuapp.frs.service;

import java.util.List;

import javax.transaction.Transactional;

import com.herokuapp.frs.dao.ItemDAO;
import com.herokuapp.frs.entity.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

  @Autowired
  private ItemDAO itemDao;

  @Override
  @Transactional
  public Item getItem(int itemId) {
    return itemDao.getItem(itemId);
  }

  @Override
  @Transactional
	public List<Item> getMenu(int restaurantId) {
		return itemDao.getMenu(restaurantId);
	}

}