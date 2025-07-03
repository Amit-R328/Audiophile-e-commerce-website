import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  aboutSection = {
    imageUrl: {
      desktop: "https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440924/Audiophile%20e-commerce%20website/shared/desktop/image-best-gear_uvgmrg.jpg",
      tablet: "https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440926/Audiophile%20e-commerce%20website/shared/tablet/image-best-gear_tnocon.jpg",
      mobile: "https://res.cloudinary.com/dcbbqlssh/image/upload/v1725440925/Audiophile%20e-commerce%20website/shared/mobile/image-best-gear_b48tnl.jpg"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
