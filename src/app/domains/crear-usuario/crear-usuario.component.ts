import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-crear-usuario',
  
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private toastr: ToastrService){
    this.usuarioForm = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        documento: ['', Validators.required],
       
      }
    )

    
  }

  ngOnInit(): void{

  }
  agregarUsuario(){
    console.log(this.usuarioForm)
    console.log(this.usuarioForm.get('producto')?.value);
    

    const USUARIO = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      documento: this.usuarioForm.get('documento')?.value,
    };

    console.log(USUARIO);
    this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado!');
    this.router.navigate(["/users"]);
  }
}

