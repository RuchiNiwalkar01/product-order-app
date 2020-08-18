import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css'],
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  editRestaurantForm = new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commonService
      .getCurrentRestaurantId(this.activatedRoute.snapshot.params.id)
      .subscribe((result) => {
        this.editRestaurantForm = new FormGroup({
          name: new FormControl(result['name']),
          Address: new FormControl(result['Address']),
          email: new FormControl(result['email']),
        });
      });
  }

  UpdateResto() {
    this.commonService
      .updateRestaurantById(
        this.activatedRoute.snapshot.params.id,
        this.editRestaurantForm.value
      )
      .subscribe((data) => {
        this.alert = true;
        this.editRestaurantForm.reset({});
        console.log(data, 'update success');
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
