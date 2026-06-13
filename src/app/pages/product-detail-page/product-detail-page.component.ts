import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

interface ProductView {
  status: 'loading' | 'loaded' | 'error';
  product?: Product;
}

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  view$!: Observable<ProductView>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.view$ = this.route.paramMap.pipe(
      tap(() => window.scrollTo({ top: 0, behavior: 'auto' })),
      switchMap((params: any) =>
        this.productService.getBySlug(params.get('slug') ?? '').pipe(
          // Once the request resolves we know whether the product exists.
          map((product): ProductView => ({ status: 'loaded', product })),
          // Show a loading state until the (possibly slow/cold-start) request returns,
          // instead of flashing "Product not found".
          startWith({ status: 'loading' } as ProductView),
          catchError(() => of<ProductView>({ status: 'error' }))
        )
      )
    );
  }

  goBack(): void {
    this.location.back();
  }
}
