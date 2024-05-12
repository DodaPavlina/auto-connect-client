import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Filter} from "../dto/filter";
import {Observable} from "rxjs";
import {Vehicle} from "../dto/vehicle";
import {environment} from "../../environments/environment";
import {Booking} from "../dto/booking";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getList(filter: Filter): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.apiUrl + "vehicles")
  }

  getById(id: string): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(environment.apiUrl + "vehicles/get?id=" + id);
  }

  save(booking: Booking): Observable<string> {
    return this.httpClient.post<string>(environment.apiUrl + "booking/save", booking);
  }
}
