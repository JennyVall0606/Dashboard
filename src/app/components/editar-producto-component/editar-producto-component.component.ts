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
      price: ['', Validators.required],
      size: this.fb.array([]),
      color: this.fb.array([]),
      scent: this.fb.array([]),
      stock: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductById(this.id).subscribe((data: any) => {
      this.productoForm.patchValue({
        name: data.name,
        description: data.description,
        price: data.price,
      });

      this.size.clear();
      this.color.clear();
      this.scent.clear();
      this.stock.clear();

      data.size.forEach((sizeItem: any) => this.size.push(this.fb.group({
        size: [sizeItem.code, Validators.required],
        price: [sizeItem.price, Validators.required]
      })));

      data.color.forEach((colorItem: any) => this.color.push(this.fb.control(colorItem)));

      data.scent.forEach((scentItem: any) => this.scent.push(this.fb.control(scentItem)));

      data.stock.forEach((stockItem: any) => this.stock.push(this.fb.control(stockItem)));
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

    const updatedProduct = this.productoForm.value;

    this.productoService.updateProduct(this.id, updatedProduct).subscribe(
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

  removeSizeControl(index: number) {
    const sizeArray = this.productoForm.get('size') as FormArray;
    sizeArray.removeAt(index);
  }

  addSizeControl() {
    const sizeArray = this.productoForm.get('size') as FormArray;
    sizeArray.push(this.fb.group({
      size: '',
      price: ''
    }));
  }

  removeColorControl(index: number) {
    const colorArray = this.productoForm.get('color') as FormArray;
    colorArray.removeAt(index);
  }

  addColorControl() {
    const colorArray = this.productoForm.get('color') as FormArray;
    colorArray.push(this.fb.control(''));
  }

  removeScentControl(index: number) {
    const scentArray = this.productoForm.get('scent') as FormArray;
    scentArray.removeAt(index);
  }

  addScentControl() {
    const scentArray = this.productoForm.get('scent') as FormArray;
    scentArray.push(this.fb.control(''));
  }

  removeStockControl(index: number) {
    const stockArray = this.productoForm.get('stock') as FormArray;
    stockArray.removeAt(index);
  }

  addStockControl() {
    const stockArray = this.productoForm.get('stock') as FormArray;
    stockArray.push(this.fb.control(''));
  }

  volver() {
    this.router.navigate(['/products']);
  }
}
