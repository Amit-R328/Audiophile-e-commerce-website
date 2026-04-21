import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-hero',
  templateUrl: './product-hero.component.html',
  styleUrls: ['./product-hero.component.scss']
})
export class ProductHeroComponent {
  @Input() product!: Product;
  quantity = 1;

  constructor(private cart: CartService) {}

  inc(): void {
    this.quantity++;
  }

  dec(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
    this.quantity = 1;
  }
}
