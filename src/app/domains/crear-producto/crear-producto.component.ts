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
        color: this.fb.array([]),
        aroma: this.fb.array([]),
        stock: this.fb.array([])
        
      }
    );

    this.addSizeControl();
    this.addColorControl();
    this.addAromaControl();
    this.addStockControl();
    
  }

  ngOnInit(): void{

  }

  get size(): FormArray {
    return this.productoForm.get('size') as FormArray;
  }

  get price(): FormArray {
    return this.productoForm.get('price') as FormArray;
  }

  get color(): FormArray {
    return this.productoForm.get('color') as FormArray;
  }

  get aroma(): FormArray {
    return this.productoForm.get('aroma') as FormArray;
  }

  get stock(): FormArray {
    return this.productoForm.get('stock') as FormArray;
  }

  

  agregarProducto(): void {
    if (this.productoForm.invalid) {
      return;
    }
    
    const { producto, descripcion, size, stock } = this.productoForm.value;

    const sizes = size.map((s: any) => ({
      code: s.size,
      price: s.price
    }));

    const nuevoProducto: Product = {
      name: producto,
      descripcion: descripcion,
      size: sizes,
      color: this.color.value,
      aroma: this.aroma.value,
      stock: stock,
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

  addColorControl(): void {
    this.color.push(this.fb.control('')); 
  }

  removeColorControl(index: number): void {
    if (this.color.length > 1) {
      this.color.removeAt(index);
    }
  }

  addAromaControl(): void {
    this.aroma.push(this.fb.control(''));
  }

  removeAromaControl(index: number): void {
    if (this.aroma.length > 1) {
      this.aroma.removeAt(index);
    }
  }
  
  addStockControl(): void {
    this.stock.push(this.fb.control(''));
  }

  removeStockControl(index: number): void {
    this.stock.removeAt(index);
  }

  volver(): void {
    this.router.navigate(['/products']);
  }
}

  


