import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Product, ResponsiveImage } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly endpoint = `${environment.apiUrl}/products`;
  private products$?: Observable<Product[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    if (!this.products$) {
      this.products$ = this.http.get<Product[]>(this.endpoint).pipe(
        map(products => products.map(p => this.normalizePaths(p))),
        shareReplay(1)
      );
    }
    return this.products$;
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.getAll().pipe(
      map(products => products.filter(p => p.category === category))
    );
  }

  private normalizePaths(product: Product): Product {
    return {
      ...product,
      image: this.normalizeImage(product.image),
      categoryImage: this.normalizeImage(product.categoryImage),
      gallery: {
        first: this.normalizeImage(product.gallery.first),
        second: this.normalizeImage(product.gallery.second),
        third: this.normalizeImage(product.gallery.third),
      },
      others: product.others.map(o => ({ ...o, image: this.normalizeImage(o.image) })),
    };
  }

  private normalizeImage(img: ResponsiveImage): ResponsiveImage {
    return {
      mobile: this.normalizePath(img.mobile),
      tablet: this.normalizePath(img.tablet),
      desktop: this.normalizePath(img.desktop),
    };
  }

  private normalizePath(path: string): string {
    if (!path) return path;
    if (path.startsWith('http')) return path;
    return path.replace(/^\.\//, '/');
  }
}
