package com.herokuapp.frs.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="item")
public class Item {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="id")
  private int id;

  @Column(name="name")
  private String name;

  @ManyToOne
  @JoinColumn(name="restaurant_id")
  private Restaurant restaurant;

  @OneToMany(cascade=CascadeType.ALL, mappedBy="item")
  private List<Review> reviews;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Restaurant getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(Restaurant restaurant) {
    this.restaurant = restaurant;
  }

  public List<Review> getReviews() {
    return reviews;
  }

  public void setReviews(List<Review> reviews) {
    this.reviews = reviews;
  }

}