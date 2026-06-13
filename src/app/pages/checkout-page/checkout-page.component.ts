import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

type PaymentMethod = 'e-money' | 'cash';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  submitted = false;

  items: CartItem[] = [];
  subtotal = 0;
  readonly shipping = 50;

  orderConfirmed = false;
  orderedItems: CartItem[] = [];
  orderedTotal = 0;

  private sub?: Subscription;

  constructor(
    private fb: FormBuilder,
    private cart: CartService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s()-]{7,}$/)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      zip: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s-]{3,10}$/)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required, Validators.minLength(2)]],
      paymentMethod: ['e-money' as PaymentMethod, Validators.required],
      eMoneyNumber: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
      eMoneyPin: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });

    this.sub = this.cart.cart$.subscribe(items => {
      this.items = items;
      this.subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    });

    this.form.get('paymentMethod')!.valueChanges.subscribe(method => {
      const numberCtrl = this.form.get('eMoneyNumber')!;
      const pinCtrl = this.form.get('eMoneyPin')!;
      if (method === 'e-money') {
        numberCtrl.setValidators([Validators.required, Validators.pattern(/^\d{8,}$/)]);
        pinCtrl.setValidators([Validators.required, Validators.pattern(/^\d{4}$/)]);
      } else {
        numberCtrl.clearValidators();
        pinCtrl.clearValidators();
      }
      numberCtrl.updateValueAndValidity();
      pinCtrl.updateValueAndValidity();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  get paymentMethod(): PaymentMethod {
    return this.form.get('paymentMethod')!.value;
  }

  get vat(): number {
    return Math.round(this.subtotal * 0.2);
  }

  get grandTotal(): number {
    return this.subtotal + this.shipping;
  }

  isInvalid(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.invalid && (c.touched || this.submitted);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const firstInvalid = document.querySelector('.field--invalid input');
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }
    if (!this.items.length) return;

    // Snapshot the order before clearing the cart so the modal keeps showing it.
    this.orderedItems = [...this.items];
    this.orderedTotal = this.grandTotal;
    this.orderConfirmed = true;
    this.cart.clear();
  }

  backToHome(): void {
    this.orderConfirmed = false;
    this.router.navigate(['/']);
  }
}
