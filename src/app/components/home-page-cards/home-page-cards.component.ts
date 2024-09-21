import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-cards',
  templateUrl: './home-page-cards.component.html',
  styleUrl: './home-page-cards.component.css',
})
export class HomePageCardsComponent {
  @Input() currentProduct;
  constructor(private router: Router) {}

  toShop(name: string) {
    this.router.navigate(['/shop', name]);
  }
}
