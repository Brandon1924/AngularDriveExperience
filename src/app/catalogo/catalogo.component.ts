import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  
  // Definir los vehículos como objetos con sus propiedades
  car1 = { id: 1, marca: 'Auto', precio: 405900, anio: 2010, imagen: '../../../../assets/images/auto1.png'};
  car2 = { id: 2, marca: 'Auto2', precio: 11, anio: 2022, imagen: '../../../../assets/images/auto2.png'};
  car3 = { id: 3, marca: 'Auto3', precio: 320000, anio: 2021, imagen: '../../../../assets/images/auto3.png'};
  car4 = { id: 3, marca: 'Auto4', precio: 120000, anio: 2021, imagen: '../../../../assets/images/auto4.png'};
  
  constructor(private authService: AuthService, private router: Router) { }

  // Método que se ejecuta cuando el usuario hace clic en "Adquirir"
  redirectToPage(vehicle: any): void {
    if (!this.authService.isAuthenticated()) {
      // Si el usuario no está autenticado, redirige al login
      this.router.navigate(['/login']);
    } else {
      // Si está autenticado, redirige al cotizador pasando el id del vehículo
      this.router.navigate(['/cotizador'], { queryParams: { id: vehicle.id } });
    }
  }

  ngOnInit(): void {
    // Aquí puedes cargar los datos de vehículos si provienen de un servicio o una API
  }
}
