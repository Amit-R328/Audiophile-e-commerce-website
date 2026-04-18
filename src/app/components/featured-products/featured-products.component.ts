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
        desktop: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452035/home/desktop/image-speaker-zx9_qklcmp.png',
        tablet: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452044/home/tablet/image-speaker-zx9_wl6drh.png',
        mobile: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452040/home/mobile/image-speaker-zx9_vdmxms.png',
        circles: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452036/home/desktop/pattern-circles_xeme6l.svg'
      } 
    },
    {
      title: 'ZX7 SPEAKER',
      link: '/products/zx7-speaker',
      images: {
        desktop: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452034/home/desktop/image-speaker-zx7_gh1s4p.jpg',
        tablet: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452043/home/tablet/image-speaker-zx7_tsu8ep.jpg',
        mobile: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452039/home/mobile/image-speaker-zx7_cj0nzg.jpg',
      } 
    },
    {
      title: 'YX1 EARPHONES',
      link: '/products/yx1-earphones',
      images: {
        desktop: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452032/home/desktop/image-earphones-yx1_ad541c.jpg',
        tablet: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452041/home/tablet/image-earphones-yx1_o3pwbv.jpg',
        mobile: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776452037/home/mobile/image-earphones-yx1_ziclnf.jpg',
      } 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
