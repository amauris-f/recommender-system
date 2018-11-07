package com.herokuapp.frs.rest;


import javax.servlet.http.HttpServletRequest;

import com.herokuapp.frs.entity.Item;
import com.herokuapp.frs.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class ItemController extends com.herokuapp.frs.rest.RestController{
  @Autowired
  private ItemService itemService;


  @GetMapping("/item/{itemId}")
  public Item getItem(@PathVariable int itemId, HttpServletRequest request){
    authorizeRequest(request);
    return itemService.getItem(itemId); 
  }
}