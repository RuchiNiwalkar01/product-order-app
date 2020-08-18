import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  createUser() {
    console.log(this.registerUser.value);
    this.commonService
      .registerNewUser(this.registerUser.value)
      .subscribe((result) => {
        this.alert = true;
        this.registerUser.reset({});
        console.log(result);
      });
  }

  closeAlert() {
    this.alert = false;
  }
}
