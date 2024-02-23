import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-botones-cabecera',
  templateUrl: './componente-botones-cabecera.component.html',
  styleUrls: ['./componente-botones-cabecera.component.css'],
})
export class ComponenteBotonesCabeceraComponent {
  @Input() tituloCabecera: string = '';
  @Input() nombrePersonaCabecera: string = '';

  @Input() botonRetroceder: boolean = true;
  @Input() botonCancelar: boolean = true;
  @Input() botonCrearCita: boolean = true;
  @Input() botonSalirPaciente: boolean = true;
  @Input() estilosBotonSalirPaciente: any = {};


  @Input() rutaRetroceder: string = '';
  @Input() rutaCancelar: string = '';
  @Input() rutaCrearCita: string = '';
  @Input() rutaSalir: string = '';

  constructor(private router: Router) {}

  redirigir(tipo: string) {
    if (tipo === 'retroceder' && this.rutaRetroceder) {
      this.router.navigate([this.rutaRetroceder]);
    }

    if (tipo === 'salir' && this.rutaSalir) {
      this.router.navigate([this.rutaSalir]);
    }

    if (tipo === 'cancelar' && this.rutaCancelar) {
      this.router.navigate([this.rutaCancelar]);
    }

    if (tipo === 'crearCita' && this.rutaCrearCita) {
      this.router.navigate([this.rutaCrearCita]);
    }
  }
}
