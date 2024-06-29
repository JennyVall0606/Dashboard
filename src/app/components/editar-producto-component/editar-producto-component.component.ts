import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductById(this.id).subscribe((data: any) => {
      this.productoForm.setValue({
        name: data.name,
        description: data.description,
        price: data.price
      });
    });
  }

  actualizarProducto() {
    if (this.productoForm.invalid) {
      return;
    }

    this.productoService.updateProduct(this.id, this.productoForm.value).subscribe(
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
}
