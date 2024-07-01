import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto-component.component.html',
  styleUrls: ['./editar-producto-component.component.css']
})
export class EditarProductoComponent implements OnInit {
  productoForm: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      size: this.fb.array([]),
      color: this.fb.array([]),
      scent: this.fb.array([]),
      stock: this.fb.array([])
    });

    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductById(this.id).subscribe((data: any) => {
      this.productoForm.patchValue({
        name: data.name,
        description: data.description,
      });

      this.size.clear();
      data.size.forEach((size: any) => {
        this.size.push(this.fb.group({
          size: [size.code, Validators.required],
          price: [size.price, Validators.required]
        }));
      });

      this.color.clear();
      data.color.forEach((color: any) => {
        this.color.push(this.fb.control(color));
      });

      this.scent.clear();
      data.scent.forEach((scent: any) => {
        this.scent.push(this.fb.control(scent));
      });

      this.stock.clear();
      data.stock.forEach((stock: any) => {
        this.stock.push(this.fb.control(stock));
      });
    });
  }

  get size(): FormArray {
    return this.productoForm.get('size') as FormArray;
  }

  get color(): FormArray {
    return this.productoForm.get('color') as FormArray;
  }

  get scent(): FormArray {
    return this.productoForm.get('scent') as FormArray;
  }

  get stock(): FormArray {
    return this.productoForm.get('stock') as FormArray;
  }

  actualizarProducto() {
    if (this.productoForm.invalid) {
      return;
    }

    const { name, description, size, stock } = this.productoForm.value;

    const sizes = size.map((s: any) => ({
      code: s.size,
      price: s.price
    }));

    const productoActualizado = {
      name: name,
      description: description,
      size: sizes,
      color: this.color.value,
      scent: this.scent.value,
      stock: stock
    };

    this.productoService.updateProduct(this.id, productoActualizado).subscribe(
      () => {
        this.toastr.success('Producto actualizado con éxito', 'Éxito');
        this.router.navigate(['/products']);
      },
      error => {
        console.error('Error actualizando producto', error);
        this.toastr.error('Hubo un error al actualizar el producto', 'Error');
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

  addColorControl(): void {
    this.color.push(this.fb.control('')); 
  }

  removeColorControl(index: number): void {
    if (this.color.length > 1) {
      this.color.removeAt(index);
    }
  }

  addscentControl(): void {
    this.scent.push(this.fb.control(''));
  }

  removescentControl(index: number): void {
    if (this.scent.length > 1) {
      this.scent.removeAt(index);
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
