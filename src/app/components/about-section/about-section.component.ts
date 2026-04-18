import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  aboutSection = {
    imageUrl: {
      desktop: "https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776451597/shared/desktop/image-best-gear_no9qfa.jpg",
      tablet: "https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776451613/shared/tablet/image-best-gear_oivv0v.jpg",
      mobile: "https://res.cloudinary.com/dcbbqlssh/image/upload/f_auto,q_auto/v1776451607/shared/mobile/image-best-gear_ssvscq.jpg"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
