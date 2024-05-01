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

    });
  }


}
var swiper = new Swiper('.car-images', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



