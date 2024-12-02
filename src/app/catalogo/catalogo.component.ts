import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  // Array de vehículos
  vehículos = [
    {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      año: 2022,
      precioLista: 25000,
      fotoLateralUrl: 'assets/images/toyota-corolla.jpg'  // Asegúrate de tener esta ruta de imagen correctamente configurada
    },
    {
      id: 2,
      marca: 'Honda',
      modelo: 'Civic',
      año: 2021,
      precioLista: 23000,
      fotoLateralUrl: 'assets/images/honda-civic.jpg'  // Asegúrate de tener esta ruta de imagen correctamente configurada
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes cargar los datos de vehículos si provienen de un servicio o una API
  }
}
