package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Item;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ItemDAOImpl implements ItemDAO {
  
  @Autowired
  private SessionFactory sessionFactory;

  @Override
  public Item getItem(int itemId) {
    Session currentSession = sessionFactory.getCurrentSession();
    return currentSession.get(Item.class, itemId);
  }

	@Override
	public List<Item> getMenu(int restaurantId) {
    Session currentSession = sessionFactory.getCurrentSession();
    String hql = "FROM Item WHERE restaurant_id=" + restaurantId;
    return currentSession.createQuery(hql, Item.class).getResultList();
	}

}