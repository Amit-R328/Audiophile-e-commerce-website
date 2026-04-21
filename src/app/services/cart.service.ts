import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

const STORAGE_KEY = 'audiophile.cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>(this.load());

  readonly cart$: Observable<CartItem[]> = this.items$.asObservable();
  readonly count$: Observable<number> = this.cart$.pipe(
    map(items => items.reduce((sum, item) => sum + item.quantity, 0))
  );
  readonly total$: Observable<number> = this.cart$.pipe(
    map(items => items.reduce((sum, item) => sum + item.price * item.quantity, 0))
  );

  add(product: Product, quantity: number): void {
    if (quantity < 1) return;
    const items = [...this.items$.value];
    const existing = items.find(i => i.slug === product.slug);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        slug: product.slug,
        shortName: this.shortName(product.name),
        price: product.price,
        image: product.image,
        quantity
      });
    }
    this.commit(items);
  }

  updateQuantity(slug: string, quantity: number): void {
    if (quantity < 1) return;
    const items = this.items$.value.map(i =>
      i.slug === slug ? { ...i, quantity } : i
    );
    this.commit(items);
  }

  remove(slug: string): void {
    this.commit(this.items$.value.filter(i => i.slug !== slug));
  }

  clear(): void {
    this.commit([]);
  }

  private commit(items: CartItem[]): void {
    this.items$.next(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }

  private load(): CartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private shortName(name: string): string {
    // "XX99 Mark II Headphones" → "XX99 MK II"
    return name
      .replace(/\s*Wireless\s*/i, ' ')
      .replace(/\s*Headphones?\s*/i, '')
      .replace(/\s*Earphones?\s*/i, '')
      .replace(/\s*Speakers?\s*/i, '')
      .replace(/\bMark\b/gi, 'MK')
      .trim();
  }
}
