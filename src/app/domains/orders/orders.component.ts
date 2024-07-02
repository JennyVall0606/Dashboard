// orders.component.ts

import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../services/order.service';
import { Purchase } from '../../models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  purchases: Purchase[] = [];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.getPurchases();
  }

  getPurchases(): void {
    this.purchaseService.getPurchases()
      .subscribe(
        purchases => {
          this.purchases = purchases;
        },
        error => {
          console.error('Error fetching purchases:', error);
        }
      );
  }

  
}
