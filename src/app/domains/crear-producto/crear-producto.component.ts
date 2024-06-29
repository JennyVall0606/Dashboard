import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product.model';
import { ProductoService } from '../../services/producto.service';






@Component({
  selector: 'app-crear-producto',
 
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit{
  

  productoForm: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private toastr: ToastrService, private productoService: ProductoService){
    this.productoForm = this.fb.group(
      {
        producto: ['', Validators.required],
        descripcion: ['', Validators.required],
        size: this.fb.array([]),
        
      }
    );

    this.addSizeControl();
    
  }

  ngOnInit(): void{

  }

  get size(): FormArray {
    return this.productoForm.get('size') as FormArray;
  }

  get price(): FormArray {
    return this.productoForm.get('price') as FormArray;
  }

  

  agregarProducto(): void {
    if (this.productoForm.invalid) {
      return;
    }
    
    const { producto, descripcion, size, price } = this.productoForm.value;

    const sizes = size.map((s: any) => ({
      code: s.size,
      price: s.price
    }));

    const nuevoProducto: Product = {
      name: producto,
      descripcion: descripcion,
      size: sizes,
      price: []  
    };
    console.log(nuevoProducto);
    
    this.productoService.createProduct(nuevoProducto).subscribe(
      () => {
        this.toastr.success('El producto fue registrado con éxito!', 'Producto registrado!');
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error creando producto', error);
        this.toastr.error('Hubo un error al registrar el producto', 'Error');
      }
    );
  }
  
  addSizeControl(): void {
    this.size.push(this.fb.group({
      size: ['', Validators.required],
      price: ['', Validators.required] 
    }));
  }

  removeSizeControl(index: number): void {
    if (this.size.length > 1) {
      this.size.removeAt(index);
    }
  }

 

  removePriceControl(index: number): void {
    if (this.price.length > 1) {
      this.price.removeAt(index);
    }
  }
}

  


