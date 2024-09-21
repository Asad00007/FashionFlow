import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  showAll = false;
  showMen = false;
  showWomen = false;
  showKids = false;
  showAccessories = false;
  showAllBrands = false;
  showSideBar = false;
  showPriceRange = false;
  category = '';
  brands: any[] = [];
  priceRange = '';
  constructor(private productService: ProductService, private router: Router) {
    scrollTo(0, 0);
  }

  allProducts;
  ngOnInit() {
    this.allProducts = this.productService.products;
  }
  toggleShowSideBar() {
    this.showSideBar = !this.showSideBar;
    this.showAll = false;
    this.showMen = false;
    this.showWomen = false;
    this.showKids = false;
    this.showAccessories = false;
    this.showAllBrands = false;
  }
  viewProduct(name: string) {
    this.router.navigate(['/shop', name]);
  }

  checkWishList(name) {
    let res = this.productService.wishListItems.some((items) => {
      return items.name === name;
    });
    return res;
  }

  addBrand(name: string) {
    if (this.brands.includes(name)) {
      this.brands = this.brands.filter((item) => item !== name);
    } else {
      this.brands = [...this.brands, name];
    }
  }
  removeBrand(name: string) {
    this.brands = this.brands.filter((item) => item !== name);
  }

  clearAll() {
    this.category = '';
    this.brands = [];
  }

  filterProducts() {
    this.allProducts = this.productService.products.filter((item) => {
      if (this.category !== '' && this.brands.length > 0) {
        return (
          item.subCategory === this?.category &&
          this.brands.includes(item.brand)
        );
      } else if (this.category !== '' && this.brands.length === 0) {
        return item.subCategory === this?.category;
      } else if (this.category === '' && this.brands.length > 0) {
        return this.brands.includes(item.brand);
      } else {
        return true;
      }
    });
  }
}
