import {Component, OnInit} from '@angular/core';
import {HomeService} from './../../service/home.service';
import {Brand} from "../../dto/brand";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {}


}
