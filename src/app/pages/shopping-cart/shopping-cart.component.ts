import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cartProducts;
  totalStandardPrice = 0;
  discountedPrice = 0;
  selectedProducts: any[] = [];
  itemRemoved = false;
  itemAdded = false;

  constructor(private productService: ProductService) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.productService.selectedProducts;
    this.cartProducts = this.productService.selectedProducts;

    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalStandardPrice =
        this.totalStandardPrice + this.cartProducts[i].standardPrice;
    }
    console.log(this.totalStandardPrice);

    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].discountedPrice > 0) {
        this.discountedPrice =
          this.discountedPrice +
          (this.cartProducts[i].standardPrice -
            this.cartProducts[i].discountedPrice);
      }
    }
  }

  removeItem(item, id) {
    this.cartProducts = this.cartProducts.filter((_, index) => {
      return index !== id;
    });
    this.productService.selectedProducts = this.cartProducts;
    this.productService.productChanged.emit();
    this.totalStandardPrice = this.totalStandardPrice - item.standardPrice;

    this.discountedPrice =
      item.discountedPrice > 0
        ? this.discountedPrice - (item.standardPrice - item.discountedPrice)
        : this.discountedPrice;

    this.itemRemoved = true;
    setTimeout(() => {
      this.itemRemoved = false;
    }, 1000);
  }
  moveToWishlist(item) {
    const isInWishlist = this.productService.wishListItems.some(
      (wItem) => wItem.name === item.name
    );
    if (isInWishlist) {
      this.productService.wishListItems =
        this.productService.wishListItems.filter((items) => {
          return items.name !== item.name;
        });
      this.itemRemoved = true;
      setTimeout(() => {
        this.itemRemoved = false;
      }, 1000);
      this.checkWishList(item.name);
    } else {
      this.productService.wishListItems.push(item);
      this.itemAdded = true;
      setTimeout(() => {
        this.itemAdded = false;
      }, 1000);
      this.checkWishList(item.name);
    }
    console.log(this.productService.wishListItems);
  }

  checkWishList(name) {
    let res = this.productService.wishListItems.some((items) => {
      return items.name === name;
    });
    return res;
  }
}
