import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageCardsComponent } from './components/home-page-cards/home-page-cards.component';
import { SaleCardsComponent } from './components/sale-cards/sale-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountComponent } from './pages/account/account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    HomePageCardsComponent,
    SaleCardsComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    WishlistComponent,
    AboutUsComponent,
    ContactUsComponent,
    AccountComponent,
    MyOrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
