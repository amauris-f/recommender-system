package com.herokuapp.frs.dao;

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

}