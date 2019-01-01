package com.herokuapp.frs.service;

import java.util.List;

import javax.transaction.Transactional;

import com.herokuapp.frs.dao.ItemDAO;
import com.herokuapp.frs.entity.Item;

import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {
  //Format String - 1st parameter: User id
  private static final String similarUsersTempTable ="CREATE TEMP TABLE similar_ranked AS " +
    "SELECT b.user_id, COUNT(*) as rank " + 
    "FROM recommender_system.review a join recommender_system.review b " + 
    "ON a.item_id = b.item_id AND a.id <> b.id AND a.rating = b.rating " +
    "WHERE a.user_id = %d " + 
    "GROUP BY b.user_id " + 
    "ORDER BY rank DESC;";
    
  //Format String - 1st parameter: User id, 1nd parameter: Restaurant id
  private static final String recommendedItems = "SELECT items.item_id FROM(SELECT users_revs.item_id, item_details.restaurant_id, sum(similar_ranked.rank) total_rank " + 
  " FROM similar_ranked " +
  " join recommender_system.review users_revs on similar_ranked.user_id = users_revs.user_id " +
  " left join recommender_system.review target on target.user_id = %d AND target.item_id = users_revs.item_id " +
  " join recommender_system.item item_details on users_revs.item_id = item_details.id " +
  " WHERE target.item_id is null AND item_details.restaurant_id = %d " + 
  " GROUP BY users_revs.item_id, item_details.restaurant_id " + 
  " HAVING avg(users_revs.rating) >= 3 " +
  " ORDER BY total_rank DESC " +
  " LIMIT 5) as items;";

  private static final String dropTempTable = "DROP TABLE similar_ranked";

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

  @Override
  @Transactional
  public List<Item> getRecommended(int userId, int restaurantId) {
    itemDao.ddlQuery(String.format(similarUsersTempTable, userId));
    NativeQuery<?> recommendedItemIds = itemDao.selectQuery(String.format(recommendedItems, userId, restaurantId));
    List<Integer> idsList =(List<Integer>)(recommendedItemIds.getResultList());
    itemDao.ddlQuery(dropTempTable);
    return itemDao.getRecommendedItems(idsList, restaurantId);
  }

}