import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/products.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  mostSelling;
  mostSellingFiltered;
  dealsOfDay;
  cat = '';
  constructor(private router: Router, private productService: ProductService) {
    scrollTo(0, 0);
  }
  goToShop() {
    this.router.navigate(['/shop']);
  }

  ngOnInit(): void {
    this.mostSelling = this.productService.products.filter((item) => {
      return item.rating === 4.9;
    });
    this.mostSellingFiltered = this.mostSelling;
    this.dealsOfDay = this.productService.products.filter(
      (item) => item.discountPercent === '30% off'
    );
  }

  filterProduct() {
    if (this.cat !== '') {
      this.mostSellingFiltered = this.mostSelling.filter((item) => {
        return item.category === this.cat;
      });
    } else {
      this.mostSellingFiltered = this.mostSelling;
    }
  }
  toShopItem(name: string) {
    this.router.navigate(['/shop', name]);
  }
}
