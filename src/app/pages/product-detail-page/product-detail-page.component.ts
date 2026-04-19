import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  product$!: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      tap(() => window.scrollTo({ top: 0, behavior: 'auto' })),
      switchMap((params: any) => this.productService.getBySlug(params.get('slug') ?? ''))
    );
  }

  goBack(): void {
    this.location.back();
  }
}
