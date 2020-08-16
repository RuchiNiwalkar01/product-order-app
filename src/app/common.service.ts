import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  URL = 'http://localhost:4000/resto';
  constructor(private _http: HttpClient) {}

  getRestaurantList() {
    return this._http.get(this.URL);
  }

  addRestaurants(data) {
    return this._http.post(this.URL, data);
  }
}
