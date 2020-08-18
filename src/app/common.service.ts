import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  URL = 'http://localhost:4000/resto';
  regURL = 'http://localhost:4000/users';
  constructor(private _http: HttpClient) {}

  getRestaurantList() {
    return this._http.get(this.URL);
  }

  addRestaurants(data) {
    return this._http.post(this.URL, data);
  }

  getCurrentRestaurantId(id) {
    return this._http.get(`${this.URL}/${id}`);
  }

  updateRestaurantById(id, data) {
    return this._http.put(`${this.URL}/${id}`, data);
  }

  registerNewUser(data) {
    return this._http.post(this.regURL, data);
  }
}
