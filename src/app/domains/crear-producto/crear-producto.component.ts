import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product.model';




@Component({
  selector: 'app-crear-producto',
 
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
  

  productoForm: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private toastr: ToastrService){
    this.productoForm = this.fb.group(
      {
        producto: ['', Validators.required],
        descripcion: ['', Validators.required],
        tamaño: ['', Validators.required],
        precio: ['', Validators.required],
      }
    )

    
  }

  ngOnInit(): void{

  }

  agregarProducto(){
    console.log(this.productoForm)
    console.log(this.productoForm.get('producto')?.value);
    

    const nuevoProducto: Product = {
      name: this.productoForm.get('producto')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      size: this.productoForm.get('tamaño')?.value,
      price: this.productoForm.get('precio')?.value,
      


    }
    console.log(nuevoProducto);
    this.toastr.success('El producto fue registrado con exito!', 'Producto registrado!');
    this.router.navigate(["products"]);
  }
}
