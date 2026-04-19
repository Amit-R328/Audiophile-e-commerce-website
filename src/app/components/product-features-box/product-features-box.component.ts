import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-features-box',
  templateUrl: './product-features-box.component.html',
  styleUrls: ['./product-features-box.component.scss']
})
export class ProductFeaturesBoxComponent implements OnChanges {
  @Input() product!: Product;
  paragraphs: string[] = [];

  ngOnChanges(): void {
    this.paragraphs = (this.product?.features ?? '').split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  }
}
