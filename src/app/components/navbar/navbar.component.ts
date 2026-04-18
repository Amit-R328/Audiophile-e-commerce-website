import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuCards = [
    {
      title: 'HEADPHONES',
      img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776451599/shared/desktop/image-category-thumbnail-headphones_mazr8k.png',
      alt: 'Headphones',
      link: 'headphones'
    },
    {
      title: 'SPEAKERS',
      img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776451600/shared/desktop/image-category-thumbnail-speakers_lygeb4.png',
      alt: 'Speakers',
      link: 'speakers'
    },
    {
      title: 'EARPHONES',
      img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776451597/shared/desktop/image-category-thumbnail-earphones_ph4gmz.png',
      alt: 'Earphones',
      link: 'earphones'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
