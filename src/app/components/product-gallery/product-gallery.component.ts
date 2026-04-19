import { Component, Input } from '@angular/core';
import { ResponsiveImage } from '../../models/product.model';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent {
  @Input() gallery!: { first: ResponsiveImage; second: ResponsiveImage; third: ResponsiveImage };
}
