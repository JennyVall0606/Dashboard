import { Component, inject, signal } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CardProductComponent } from '../../components/card-product/card-product.component';


@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private productsService = inject(ProductoService)

  products = signal<any>([])

  ngOnInit(){
    this.productsService.getProducts().subscribe({
      next: (response)=>{
        this.products.set(response)
      }
    })
  }
}
