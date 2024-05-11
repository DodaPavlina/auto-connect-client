import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor(private http: HttpClient) {}

  registerUser(user: RegisterServiceService): Observable<any> {
    // Replace 'home/register' with your actual registration API endpoint
    return this.http.post('home/register', user)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const errorMessage = error.error instanceof ErrorEvent
      ? `Client-side error: ${error.error.message}`
      : `Server-side error: ${error.status} - ${error.statusText}`;
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
