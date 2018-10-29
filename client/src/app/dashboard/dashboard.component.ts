import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { Review } from '../review';
import { ReviewService } from '../api-services/review.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  reviews: Review[];

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.getRecentReviews();
  }

  getRecentReviews() {
    this.reviewService.getRecentReviews().subscribe(reviews =>
      this.reviews = reviews
    );
  }
}