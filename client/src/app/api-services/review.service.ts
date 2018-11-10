import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Review } from '../review';
import { Observable } from 'rxjs';
import { ResponseBody } from '../response-body';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  constructor(private http: HttpClient, private authService: AuthenticationService) { }
  private userUrl = '/api/users';
  private reviewUrl = '/api/reviews';

  getRecentReviews(): Observable<Review[]>{
    var userId = this.authService.getUser().id;
    const url = `${this.userUrl}/${userId}/reviews/recent`;
    return this.http.get<Review[]>(url);
  }

  getReviews(restId): Observable<Review[]>{
    var userId = this.authService.getUser().id;
    const url = `${this.userUrl}/${userId}/reviews/restaurants/${restId}`;
    return this.http.get<Review[]>(url);
  }

  saveReview(review: Review): Observable<ResponseBody>{
    var authUser= this.authService.getUser();
    review.user = authUser;
    if(review.id){
      var url = `${this.reviewUrl}/${authUser.id}`;
      return this.http.put<ResponseBody>(url, review);
    } else {
      return this.http.post<ResponseBody>(this.reviewUrl, review);
    }
  }
}
