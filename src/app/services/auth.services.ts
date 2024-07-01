import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('user_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('user_token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  isLogged(): boolean {
    return !!localStorage.getItem('user_token');
  }
}
