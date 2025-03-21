import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  imports: [SlickCarouselModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent {
  slideConfig = {
    slidesToShow: 3, // Display 3 images at a time
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  images = [
    { img: 'https://via.placeholder.com/300?text=Image+1' },
    { img: 'https://via.placeholder.com/300?text=Image+2' },
    { img: 'https://via.placeholder.com/300?text=Image+3' },
    { img: 'https://via.placeholder.com/300?text=Image+4' },
    { img: 'https://via.placeholder.com/300?text=Image+5' },
    { img: 'https://via.placeholder.com/300?text=Image+6' },
  ];
}
