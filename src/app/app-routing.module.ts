import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountComponent } from './pages/account/account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ProductListComponent,
  },
  {
    path: 'shop/:name',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'myOrders',
    component: MyOrdersComponent,
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
