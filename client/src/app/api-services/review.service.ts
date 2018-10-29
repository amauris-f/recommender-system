import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  constructor(private http: HttpClient, private authService: AuthenticationService) { }
  private urlPath = '/api/review/';

  getRecentReviews(): Observable<Review[]>{
    var userId = this.authService.getUser().id;
    const url = this.urlPath + `recent/${userId}`;
    return this.http.get<Review[]>(url);
  }
}
