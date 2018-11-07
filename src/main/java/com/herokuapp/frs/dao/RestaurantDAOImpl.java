package com.herokuapp.frs.dao;

import java.util.List;

import com.herokuapp.frs.entity.Item;
import com.herokuapp.frs.entity.Restaurant;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RestaurantDAOImpl implements RestaurantDAO {
  @Autowired
  SessionFactory sessionFactory;

  @Override
  public Restaurant getRestaurant(int id) {
    Session session = sessionFactory.getCurrentSession();
    return session.get(Restaurant.class, id);
	}

  @Override
  public List<Restaurant> getAll() {
    Session session = sessionFactory.getCurrentSession();
    String hql = "FROM Restaurant";
    return session.createQuery(hql, Restaurant.class).getResultList();
  }

  @Override
  public List<Item> getMenu(int id) {
    Session currentSession = sessionFactory.getCurrentSession();
    String hql = "FROM Item WHERE restaurant_id=" + id;
    return currentSession.createQuery(hql, Item.class).getResultList();
  }

}