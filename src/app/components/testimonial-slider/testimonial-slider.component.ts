import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap'; // ✅ Correct way
@Component({
  selector: 'app-testimonial-slider',
  imports:[CommonModule , FormsModule],
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(100%)' }), animate('500ms ease-in-out')]),
      transition('* => void', [animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' }))])
    ])
  ]
})
export class TestimonialSliderComponent  {
   
  testimonials = [
    { image: 'https://media.istockphoto.com/id/800746444/photo/portrait-of-a-female-researcher-doing-research-in-a-lab.webp?a=1&b=1&s=612x612&w=0&k=20&c=-FofawmlrKTXGXUo-ORzeH_KySnXxiHb_lH5ti9bWvs=', quote: 'Amazing experience!', name: 'John Doe', profession: 'Software Engineer' },
    { image: 'https://media.istockphoto.com/id/690008418/photo/mature-male-scientist-collecting-medical-samples.jpg?s=1024x1024&w=is&k=20&c=iKlkcuVHN_ugXeSV4IVJ_LXwLdk3dLfoxt9Bc1T0PZo=', quote: 'Excellent service!', name: 'Jane Smith', profession: 'Product Manager' },
    { image: 'https://images.unsplash.com/file-1715651741414-859baba4300dimage?w=416&dpr=2&auto=format&fit=crop&q=60', quote: 'Highly recommend!', name: 'Michael Brown', profession: 'UX Designer' }
  ];
  
  activeIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    }, 3000); // Change every 3 seconds
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }


    }
