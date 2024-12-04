import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Verifica si el usuario está autenticado (por ejemplo, si hay un token en localStorage)
  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;  // Cambiar esto si usas un token JWT
  }

  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    if (username === 'usuario' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  // Método para registrar usuario
  register(username: string, password: string): boolean {
    localStorage.setItem('user', JSON.stringify({ username }));
    return true;
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
