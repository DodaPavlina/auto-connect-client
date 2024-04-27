import { VehiclePageComponent } from './../vehicle-page/vehicle-page.component';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.css']
})
export class VehicleDetailPageComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.car-images .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // Add other Swiper options as needed
    });
  }


}
var swiper = new Swiper('.car-images', {
  slidesPerView: 1, // Number of slides per view
  spaceBetween: 30, // Space between slides
  loop: true, // Enable loop mode
  pagination: {
    el: '.swiper-pagination', // Pagination container
    clickable: true, // Enable clickable pagination
  },
  navigation: {
    nextEl: '.swiper-button-next', // Next slide button
    prevEl: '.swiper-button-prev', // Previous slide button
  },
});



