import {VehiclePageComponent} from './../vehicle-page/vehicle-page.component';
import {Component, AfterViewInit, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {VehicleService} from "../../service/vehicle.service";
import {ActivatedRoute} from "@angular/router";
import {Vehicle} from "../../dto/vehicle";
import {Booking} from "../../dto/booking";


@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.css']
})
export class VehicleDetailPageComponent implements OnInit {
  model?: Vehicle;
  loading: boolean = false;
  booking: Booking = {} as Booking;
  /* let swiper = new Swiper('.car-images', {
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
   });*/



  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.loading = true;
    this.vehicleService.getById(this.route.snapshot.params['id']).subscribe({
      next: item => {
        this.model = item;
        this.booking.carId = this.model.id;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
        alert("Vehicle not found in database!");
      }
    })
  }

  doBooking() {
    if (!this.booking.firstName) {
      alert("First name is required");
      return;
    }

   /* if (!this.booking.lastName) {
      alert("Last name is required");
      return;
    }

    if (!this.booking.email) {
      alert("Email is required");
      return;
    }

    if (!this.booking.lastName) {
      alert("Last name is required");
      return;
    }*/

    this.vehicleService.save(this.booking).subscribe({
      next: result => {
        if (result === "ok") {
          alert("Your booking was registered. An operator will contact you soon!")
          this.booking = {carId: this.model?.id} as Booking;
        }
        else alert(result)
      },
      error: err =>  {
        console.error()
        alert("Error during booking: " + err);
      }
    })
  }
}


