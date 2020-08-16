import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css'],
})
export class ListRestaurantComponent implements OnInit {
  public restoArray: any;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getRestaurantList().subscribe((data) => {
      this.restoArray = data;
      console.log(this.restoArray);
    });
  }
}
