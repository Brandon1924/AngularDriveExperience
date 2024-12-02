import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }

  redirectToPage(car : any) {
    this.router.navigate(['/cotizador'], { queryParams: { 
      id: car.id, 
      marca: car.marca, 
      precio: car.precio, 
      anio: car.anio,
      imagen: car.imagen // Asegurándote de pasar la imagen correctamente
    } });
  }

  ngOnInit(): void {
    // Aquí puedes cargar los datos de vehículos si provienen de un servicio o una API
  }
}
