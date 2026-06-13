import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent {
  @Output() close = new EventEmitter<void>();

  readonly items$: Observable<CartItem[]> = this.cart.cart$;
  readonly count$: Observable<number> = this.cart.count$;
  readonly total$: Observable<number> = this.cart.total$;

  constructor(private cart: CartService, private router: Router) {}

  inc(item: CartItem): void {
    this.cart.updateQuantity(item.slug, item.quantity + 1);
  }

  dec(item: CartItem): void {
    if (item.quantity <= 1) return;
    this.cart.updateQuantity(item.slug, item.quantity - 1);
  }

  removeAll(): void {
    this.cart.clear();
  }

  onBackdropClick(): void {
    this.close.emit();
  }

  onModalClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
    this.close.emit();
  }
}
