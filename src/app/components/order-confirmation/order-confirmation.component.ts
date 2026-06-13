import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  /** Snapshot of the ordered items, taken before the cart is cleared. */
  @Input() items: CartItem[] = [];
  /** Grand total (subtotal + shipping) for the order. */
  @Input() grandTotal = 0;

  @Output() backToHome = new EventEmitter<void>();

  expanded = false;

  get visibleItems(): CartItem[] {
    return this.expanded ? this.items : this.items.slice(0, 1);
  }

  get otherCount(): number {
    return Math.max(0, this.items.length - 1);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  onBackToHome(): void {
    this.backToHome.emit();
  }

  onModalClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
