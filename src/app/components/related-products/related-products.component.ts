import { Component, Input } from '@angular/core';
import { ProductOther } from '../../models/product.model';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent {
  @Input() others: ProductOther[] = [];
}
