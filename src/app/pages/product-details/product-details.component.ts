import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productName;
  currentProduct;
  currentImage;
  selectedSize = 1;
  currentProductDetails;
  size;
  itemAdded = false;
  itemRemoved = false;
  witemRemoved = false;
  relatedProducts: any[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productName = params.get('name');
      this.loadDetails();
      window.scrollTo(0, 0);
    });
  }

  loadDetails() {
    this.currentProduct = this.productService.products.filter((item) => {
      return item.name === this.productName;
    });
    this.currentImage = this.currentProduct[0].imagePath;

    this.relatedProducts = this.productService.products.filter((item) => {
      return (
        item.subCategory === this.currentProduct[0].subCategory &&
        item.name !== this.productName
      );
    });
  }
  addOrRemove(name: string) {
    if (this.selectedSize === 1) {
      this.size = 'XS';
    } else if (this.selectedSize === 2) {
      this.size = 'S';
    } else if (this.selectedSize === 3) {
      this.size = 'M';
    } else if (this.selectedSize === 4) {
      this.size = 'L';
    } else if (this.selectedSize === 5) {
      this.size = 'XL';
    }
    this.currentProductDetails = this.productService.products.filter((item) => {
      return item.name === name;
    });

    this.productService.selectedProducts.push({
      ...this.currentProductDetails[0],
      size: this.size,
    });
    this.productService.productChanged.emit();

    this.itemAdded = true;
    setTimeout(() => {
      this.itemAdded = false;
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
      this.witemRemoved = true;
      setTimeout(() => {
        this.witemRemoved = false;
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
  }

  viewProduct(name) {
    this.router.navigate(['/shop', name]);
  }
  checkWishList(name) {
    let res = this.productService.wishListItems.some((items) => {
      return items.name === name;
    });
    return res;
  }
}
