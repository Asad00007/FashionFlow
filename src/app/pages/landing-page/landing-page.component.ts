import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ProductService } from '../../Services/products.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  mostSelling;
  mostSellingFiltered;
  dealsOfDay;
  cat = '';
  @ViewChild('fadeInElement', { static: false }) fadeInElement!: ElementRef;
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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP animation to fade in when element is in view
            gsap.from(this.fadeInElement.nativeElement, {
              opacity: 0,
              duration: 2,
              ease: 'power2.inOut',
            });
            observer.unobserve(this.fadeInElement.nativeElement); // Stop observing after animation runs
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    observer.observe(this.fadeInElement.nativeElement);
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
