import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productoService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
  trackById(index: number, item: any): string {
    return item._id;
  }
  eliminarProducto(id: string): void {
    this.productoService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(product => product._id !== id);
        alert('Producto eliminado con éxito');
      },
      error: (err) => {
        console.error('Error eliminando producto', err);
      }
    });
  }
}
