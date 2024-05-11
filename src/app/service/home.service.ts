import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'http://localhost:8080/vehicles/brands';

  constructor(private http: HttpClient) {
    console.log("constructor");

  }

  getBrands(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }
}
