import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent {
  auto: any;
  enganche: number = 0;
  plazo: string = '';
  aseguradora: string = '';
  
  montoFinanciar: number = 0;
  pagoInicial: number = 0;
  comisionApertura: number = 0;
  seguroContado: number = 0;
  tasaInteres: number = 0;
  plazoLabel: string = '';
  mensualidad: number = 0;

  financiarSeguro: string = 'no'; // Para saber si el seguro será financiado

  // Constructor que recibe el auto pasado por queryParams
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.auto = {
        id: params['id'],
        marca: params['marca'],
        precio: params['precio'],
        anio: params['anio'],
        imagen: ['imagen']
      };
    });
  }

  // Función que se llama cuando se hace clic en "Generar"
  generarCotizacion() {
    // Reiniciar las variables a su valor inicial antes de hacer cualquier cálculo
    this.montoFinanciar = 0;
    this.pagoInicial = 0;
    this.comisionApertura = 0;
    this.seguroContado = 0;
    this.tasaInteres = 0;
    this.mensualidad = 0;

    // Calcular el enganche mínimo y máximo en función del precio del auto
    const engancheMinimo = this.auto.precio * 0.30;  // 30% del precio del auto
    const engancheMaximo = this.auto.precio * 0.70;  // 70% del precio del auto

    // Validar que el enganche esté dentro del rango permitido
    if (this.enganche < engancheMinimo) {
      alert(`El enganche debe ser al menos el 30% del valor del auto. El valor mínimo es $${engancheMinimo.toFixed(2)}`);
      return;
    }

    if (this.enganche > engancheMaximo) {
      alert(`El enganche no puede ser mayor al 70% del valor del auto. El valor máximo es $${engancheMaximo.toFixed(2)}`);
      return;
    }

    // Asumir que la comisión por apertura es el 2% del monto a financiar
    this.comisionApertura = (this.auto.precio - this.enganche) * 0.02;

    // Seguro de contado según la aseguradora seleccionada
    if (this.aseguradora === 'qualitas') {
      this.seguroContado = 20333;
    } else if (this.aseguradora === 'gnp') {
      this.seguroContado = 12000;
    } else {
      this.seguroContado = 0;
    }

    // Si el seguro no es financiado
    if (this.financiarSeguro === 'no') {
      // El monto a financiar será el precio del auto menos el enganche
      this.montoFinanciar = this.auto.precio - this.enganche;
    
      // El pago inicial será enganche + comisión + seguro
      this.pagoInicial = this.enganche + this.comisionApertura + this.seguroContado;
    } else {
      // Si financia el seguro, el monto a financiar incluye el precio del auto + seguro
      this.montoFinanciar = this.seguroContado + (this.auto.precio - this.enganche);

      // El pago inicial será enganche + comisión, sin incluir el seguro
      this.pagoInicial = this.enganche + this.comisionApertura;
    }

    // Calcular tasa de interés y mensualidad según el plazo
    let plazoNumerico = 0;

    // Convertir el plazo a número
    if (this.plazo === '24meses') {
      this.tasaInteres = 0.15; // 15%
      this.plazoLabel = '24 meses';
      plazoNumerico = 24;
    } else if (this.plazo === '36meses') {
      this.tasaInteres = 0.10; // 10%
      this.plazoLabel = '36 meses';
      plazoNumerico = 36;
    } else if (this.plazo === '48meses') {
      this.tasaInteres = 0.08; // 8%
      this.plazoLabel = '48 meses';
      plazoNumerico = 48;
    }

    // Calcular mensualidad
    const tasaMensual = this.tasaInteres / 12;
    const totalADevolver = this.montoFinanciar + this.comisionApertura;
    this.mensualidad = totalADevolver * tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazoNumerico));
  }
}
