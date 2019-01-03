import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';
import { Restaurant } from '../restaurant';
import { ReviewService } from '../api-services/review.service';
import { RestaurantService } from '../api-services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  reviews: Review[];
  menu: Item[];
  private recommended: Item[];
  private selectedReview: Review;
  private selectedOrigRating: Number;
  private restaurant: Restaurant;
  constructor(private revService: ReviewService, private restService: RestaurantService, private route: ActivatedRoute) {
    this.selectedReview = new Review();
   }

  ngOnInit() {
    this.getMenu();
  }

  private getRecommended(){
    this.restService.getRecommendedByRestaurant(this.restaurant.id).subscribe(recommend =>{
      this.recommended = recommend;
    });
  }


  private addNotReviewed(): any {
    this.menu.forEach(item => {
      if(this.reviews.filter(review =>
        review.item.id === item.id).length == 0){
          this.reviews.push(new Review(null, item, 0));
          this.getRecommended();
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

  private onRatingChange($event : RatingChangeEvent, review: Review){
    if($event.rating == review.rating) {return;}
    if(review.item != this.selectedReview.item){
      var deselected = this.selectedReview;
      deselected.rating = this.selectedOrigRating;
      this.selectedReview = review;
      this.selectedOrigRating = review.rating;
    }
    this.selectedReview.rating = $event.rating;
  }

  private saveReview(){
    this.revService.saveReview(this.selectedReview).subscribe(res=>{
      var reviewCssId = this.selectedReview.item.name as string; 
      this.selectedReview = new Review();
      this.selectedOrigRating = 0;
      document.getElementById(reviewCssId).innerHTML=res.message;
      setTimeout(function(){
        document.getElementById(reviewCssId).innerHTML=null;
      }, 5000);
    });
  }

}
