import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  allProducts;
  constructor(private productService: ProductService, private router: Router) {
    scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.allProducts = this.productService.wishListItems;
  }
  viewProduct(name: string) {
    this.router.navigate(['/shop', name]);
  }
}
