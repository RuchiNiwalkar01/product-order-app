import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: any[] = [];
  customersTotalOrder: number;
  currencyCode: string = 'USD';
  constructor() {}

  ngOnInit(): void {
    this.filteredCustomers = [];
  }
}
