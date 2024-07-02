import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.services'; 
import { AppUser } from '../../models/user.model'; 

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  formInvalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService 
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      password: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario(): void {
    if (this.usuarioForm.valid) {
      const nuevoUsuario: AppUser = {
        firstname: this.usuarioForm.get('nombre')?.value,
        lastname: this.usuarioForm.get('apellido')?.value,
        email: this.usuarioForm.get('email')?.value,
        password: this.usuarioForm.get('password')?.value
      };

      this.userService.register(nuevoUsuario).subscribe({
        next: () => {
          this.toastr.success('El usuario fue registrado con éxito!', 'Usuario registrado');
          this.router.navigate(['/users']); 
          this.usuarioForm.reset();
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
          this.toastr.error('Error al registrar usuario', 'Error');
        }
      });
    } else {
      this.formInvalid = true;
      this.toastr.error('Por favor completa todos los campos correctamente', 'Formulario incompleto');
    }
  }
  volver(): void {
    this.router.navigate(['/users']); 
  }
}
