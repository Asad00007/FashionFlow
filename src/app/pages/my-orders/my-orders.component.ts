import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css',
})
export class MyOrdersComponent implements OnInit {
  allOrders: any[] = [];
  constructor(private router: Router) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    if (localStorage.getItem('Orders')) {
      this.allOrders = JSON.parse(localStorage.getItem('Orders'));
    }
  }
  toShop(name: string) {
    this.router.navigate(['/shop', name]);
  }
}
