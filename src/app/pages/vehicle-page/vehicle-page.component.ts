import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../dto/vehicle";
import {VehicleService} from "../../service/vehicle.service";

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.css']
})
export class VehiclePageComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {

  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.vehicleService.getList({}).subscribe({
      next: items => {
        this.vehicles = items;
      },
      error: o => {
        console.error(o);
        alert("Error reading vehicles")
      }
    })
  }
}
