import { Component } from '@angular/core';
import { HomeService } from './../../service/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor(private homeService: HomeService) {
    this.home();
   }

  home(): void {
    console.log("fdhkj")
    this.homeService.getBrands().subscribe((data: any) => {
      this.home = data.home;
      console.log(data)
    });
  }
}
