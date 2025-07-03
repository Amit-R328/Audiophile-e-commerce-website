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
      images: {
        desktop: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440929/Audiophile%20e-commerce%20website/home/desktop/image-speaker-zx9_sgytvb.png',
        tablet: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440930/Audiophile%20e-commerce%20website/home/tablet/image-speaker-zx9_zho1zp.png',
        mobile: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440930/Audiophile%20e-commerce%20website/home/mobile/image-speaker-zx9_chdvdr.png',
        circles: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440929/Audiophile%20e-commerce%20website/home/desktop/pattern-circles_lhecea.svg'
      } 
    },
    {
      title: 'ZX7 SPEAKER',
      link: '/products/zx7-speaker',
      images: {
        desktop: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440929/Audiophile%20e-commerce%20website/home/desktop/image-speaker-zx7_c1oler.jpg',
        tablet: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440930/Audiophile%20e-commerce%20website/home/tablet/image-speaker-zx7_av1y3r.jpg',
        mobile: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440930/Audiophile%20e-commerce%20website/home/mobile/image-speaker-zx7_ijigsr.jpg',
      } 
    },
    {
      title: 'YX1 EARPHONES',
      link: '/products/yx1-earphones',
      images: {
        desktop: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440928/Audiophile%20e-commerce%20website/home/desktop/image-earphones-yx1_fmx2tp.jpg',
        tablet: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440930/Audiophile%20e-commerce%20website/home/tablet/image-earphones-yx1_ufzk7i.jpg',
        mobile: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440929/Audiophile%20e-commerce%20website/home/mobile/image-earphones-yx1_ibd9md.jpg',
      } 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
