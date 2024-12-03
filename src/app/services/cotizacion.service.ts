import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private cotizacionesSubject = new BehaviorSubject<any[]>([]);  // Usamos un BehaviorSubject para la lista de cotizaciones

  constructor() {}

  // Función para obtener las cotizaciones guardadas
  obtenerCotizaciones() {
    return this.cotizacionesSubject.asObservable();
  }

  // Función para guardar una cotización
  guardarCotizacion(cotizacion: any) {
    const cotizaciones = this.cotizacionesSubject.value;
    cotizaciones.push(cotizacion);  // Agregar la nueva cotización
    this.cotizacionesSubject.next(cotizaciones);  // Emitir la lista actualizada
  }
}
