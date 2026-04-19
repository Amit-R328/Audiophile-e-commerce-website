import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-hero',
  templateUrl: './product-hero.component.html',
  styleUrls: ['./product-hero.component.scss']
})
export class ProductHeroComponent {
  @Input() product!: Product;
  quantity = 1;

  inc(): void {
    this.quantity++;
  }

  dec(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    // Cart functionality is a separate task — placeholder for now.
    console.log(`Add to cart: ${this.product.slug} × ${this.quantity}`);
  }
}
