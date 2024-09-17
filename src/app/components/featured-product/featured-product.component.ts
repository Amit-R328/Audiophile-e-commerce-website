import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit {
  @Input()
  product!: {
    title: string;
    description: string;
    link: string;
    background?: string; // Optional for different background styles
    layout: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
