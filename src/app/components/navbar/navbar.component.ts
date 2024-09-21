import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../Services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showSideBar = false;
  showUser = false;
  productsLength = 0;
  subscription: Subscription;
  constructor(private router: Router, private productService: ProductService) {
    this.subscription = this.productService.productChanged.subscribe(() => {
      this.productsLength = this.productService.selectedProducts.length;
    });
  }

  toCart() {
    this.router.navigate(['cart']);
  }
  toWishList() {
    this.router.navigate(['wishlist']);
    this.showUser = false;
  }
}
