import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../api-services/restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants : Restaurant[];
  constructor(private restaurantServ : RestaurantService) { }

  ngOnInit() {
    this.restaurantServ.getAll().subscribe(res => {
      this.restaurants = res
    });
  }

}
