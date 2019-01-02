import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { RestaurantService } from '../api-services/restaurant.service';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.css']
})
export class RecommendationListComponent implements OnInit {

  private recommended_items: Item[];
  constructor(private restaurantServ : RestaurantService) { }

  ngOnInit() {
    this.restaurantServ.getRecommendedAll().subscribe(res => {
      this.recommended_items = res;
    });
  }

}
