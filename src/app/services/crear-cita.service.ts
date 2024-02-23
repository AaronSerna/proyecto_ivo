import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrearCitaService {
  private citasPaso1: any[] = [];
  private citasPaso2: any[] = [];

  // Guardar datos del paso 1
  guardarCitaPaso1(cita: any) {
    this.citasPaso1.push(cita);
  }

  // Guardar datos del paso 2
  guardarCitaPaso2(cita: any) {
    this.citasPaso2.push(cita);
  }

  obtenerCitasPaso1() {
    return this.citasPaso1;
  }

  obtenerCitasPaso2() {
    return this.citasPaso2;
  }

  limpiarCitasPaso1() {
    const citasAntiguasPaso1 = [...this.citasPaso1];
    this.citasPaso1 = [];
    return citasAntiguasPaso1;
  }

  limpiarCitasPaso2() {
    const citasAntiguasPaso2 = [...this.citasPaso2];
    this.citasPaso2 = [];
    return citasAntiguasPaso2;
  }

  limpiarCitas() {
    const citasAntiguas = this.citasPaso1.concat(this.citasPaso2);
    this.citasPaso1 = [];
    this.citasPaso2 = [];
    return citasAntiguas;
  }
}
