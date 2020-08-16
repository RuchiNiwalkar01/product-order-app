import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  restaurantForm = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private commonservice: CommonService) {}

  ngOnInit(): void {}

  createResto() {
    // console.log(this.restaurantForm.value);
    this.commonservice
      .addRestaurants(this.restaurantForm.value)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
