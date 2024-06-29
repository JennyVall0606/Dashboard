import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);

  constructor() {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/products');
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/products/' + id);
  }

  deleteProduct(id: string) {
    return this.http.delete('http://localhost:3000/api/products/' + id);
  }

  updateProduct(id: string, product: any) {
    return this.http.put('http://localhost:3000/api/products/' + id, product);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/products', product);
  }
}
