import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  category$!: Observable<string>;
  products$!: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const category$ = this.route.paramMap.pipe(
      map(params => params.get('category') ?? '')
    );

    this.category$ = category$;
    this.products$ = category$.pipe(
      switchMap(category => this.productService.getByCategory(category)),
      // Newest first (highest id), matching the design order.
      map(products => [...products].sort((a, b) => b.id - a.id))
    );
  }
}
