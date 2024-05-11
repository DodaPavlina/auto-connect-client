import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {Brand} from "../dto/brand";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
    console.log("constructor");

  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(environment.apiUrl + "brands");
  }
}
