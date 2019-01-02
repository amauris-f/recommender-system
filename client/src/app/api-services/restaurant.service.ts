import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private url = "/api/restaurants";
  private item_url = "/api/item";
  constructor(private http : HttpClient) { }

  getAll() : Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url);
  }

  getMenu(restId) : Observable<Item[]> {
    const path = `${this.url}/${restId}/menu`;
    return this.http.get<Item[]>(path);
  }

  getRecommendedByRestaurant(restId) : Observable<Item[]> {
    const path = `${this.item_url}/recommend/${restId}`;
    return this.http.get<Item[]>(path);
  }

  getRecommendedAll() : Observable<Item[]> {
    const path = `${this.item_url}/recommend`;
    return this.http.get<Item[]>(path);
  }
}
