import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.services';
import { AuthService } from '../../services/auth.services';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppUser } from '../../models/user.model';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  formInvalid: boolean = false;
  errorMessage: string = '';

    constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

 
  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value as AppUser).subscribe({
        next: (response: any) => {
          if (response.token) {
            this.authService.setToken(response.token);
            this.router.navigate(['/home']);
          } else {
            this.formInvalid = true;
            this.errorMessage = 'Credenciales inválidas';
          }
        },
        error: (error) => {
          console.error('Error al iniciar sesión:', error);
          this.formInvalid = true;
          this.errorMessage = 'Error al iniciar sesión. Inténtalo de nuevo más tarde.';
          
          if (error.status === 401) {
            this.errorMessage = 'Credenciales inválidas';
          } else {
            this.errorMessage = `Error ${error.status}: ${error.message}`;
          }
        },
      });
    } else {
      alert('Campos incompletos');
      this.loginForm.markAllAsTouched();
    }
  }
}