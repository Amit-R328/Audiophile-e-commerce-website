import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    NavbarComponent,
    CartComponent,
    HeroComponent,
    CategoriesComponent,
    CategoryCardComponent,
    FeaturedProductsComponent,
    FeaturedProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
