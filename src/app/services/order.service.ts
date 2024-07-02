

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Purchase } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private apiUrl = 'http://localhost:3000/api/purchases'; 

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching purchases:', error);
          throw error; // Propagar el error para que el componente pueda manejarlo
        })
      );
  }
  getPurchaseById(id: string): Observable<Purchase> {
    return this.http.get<Purchase>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching purchase with id ${id}:`, error);
          throw error; // Propagar el error para que el componente pueda manejarlo
        })
      );
  }

  
}
