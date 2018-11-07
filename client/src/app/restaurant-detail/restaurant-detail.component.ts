import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';
import { Restaurant } from '../restaurant';
import { ReviewService } from '../api-services/review.service';
import { RestaurantService } from '../api-services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  private reviews: Review[];
  private menu: Item[];
  private restaurant: Restaurant;
  constructor(private revService: ReviewService, private restService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMenu();
  }

  private addNotReviewed(): any {
    this.menu.forEach(item => {
      if(this.reviews.filter(review =>
        review.item.id === item.id).length == 0){
          this.reviews.push(new Review(null, item, 0));
        }
    });
  }

  private getMenuReviews(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.revService.getReviews(id).subscribe(reviews =>{
        this.reviews = reviews;
        this.addNotReviewed();
      }
    );
  }

  private getMenu(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.restService.getMenu(id).subscribe(menu =>{
        this.menu = menu;
        this.restaurant = this.menu[0].restaurant;
        this.getMenuReviews();
      }   
    );
  }

}
