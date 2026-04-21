import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { ProductHeroComponent } from './components/product-hero/product-hero.component';
import { ProductFeaturesBoxComponent } from './components/product-features-box/product-features-box.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryPageComponent,
    ProductDetailPageComponent,
    HeaderComponent,
    LogoComponent,
    NavbarComponent,
    CartComponent,
    HeroComponent,
    CategoriesComponent,
    CategoryCardComponent,
    FeaturedProductsComponent,
    AboutSectionComponent,
    FooterComponent,
    ProductPreviewComponent,
    ProductHeroComponent,
    ProductFeaturesBoxComponent,
    ProductGalleryComponent,
    RelatedProductsComponent,
    CartModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
