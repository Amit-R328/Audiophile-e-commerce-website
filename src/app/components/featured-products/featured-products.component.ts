import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts = [
    {
      title: 'ZX9 SPEAKER',
      description: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
      link: '/products/zx9-speaker',
      background: '#d87d4a', 
      layout: 'left' 
    },
    {
      title: 'ZX7 SPEAKER',
      description: '',
      link: '/products/zx7-speaker',
      layout: 'right' 
    },
    {
      title: 'YX1 EARPHONES',
      description: '',
      link: '/products/yx1-earphones',
      layout: 'center' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
