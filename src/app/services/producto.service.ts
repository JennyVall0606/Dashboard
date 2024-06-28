import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }

  getProductById(id: string) {
    return this.http.get('http://localhost:3000/api/products/' + id);
  }
}
