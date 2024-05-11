import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../service/home.service";
import {Brand} from "../../dto/brand";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  brands: Brand[] =  [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(): void {
    this.homeService.getBrands().subscribe({
      next: items => {
        this.brands = items;
      },
      error: err => {
        console.error(err)
      }
    });
  }
}
