import { Component, OnInit } from '@angular/core';
import { CotizacionService } from '../services/cotizacion.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  cotizaciones: any[] = [];  // Variable para almacenar las cotizaciones

  constructor(private cotizacionService: CotizacionService) {}

  ngOnInit(): void {
    // Nos suscribimos al servicio para obtener las cotizaciones
    this.cotizacionService.obtenerCotizaciones().subscribe(cotizaciones => {
      this.cotizaciones = cotizaciones;  // Guardamos las cotizaciones obtenidas en la variable
      console.log(this.cotizaciones);  // Para depurar, revisa si los datos están siendo recibidos
    });
  }

  // Función para borrar una cotización
  borrarCotizacion(index: number): void {
    // Eliminamos la cotización de la lista y actualizamos el servicio
    this.cotizaciones.splice(index, 1);
    this.cotizacionService.guardarCotizacion(null);  // Actualizar el servicio si es necesario
  }
}
