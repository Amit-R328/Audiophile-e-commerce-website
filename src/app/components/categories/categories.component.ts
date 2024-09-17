import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      title: 'HEADPHONES',
      img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440924/Audiophile%20e-commerce%20website/shared/desktop/image-category-thumbnail-headphones_ao0fhx.png',
      alt: 'Headphones',
      link: 'headphones'
    },
    {
      title: 'SPEAKERS',
      img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440924/Audiophile%20e-commerce%20website/shared/desktop/image-category-thumbnail-speakers_s8ywqc.png',
      alt: 'Speakers',
      link: 'speakers',
    },
    {
      title: 'EARPHONES',
      img: 'https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440924/Audiophile%20e-commerce%20website/shared/desktop/image-category-thumbnail-earphones_jrkxup.png',
      alt: 'Earphones', 
      link: 'earphones'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
