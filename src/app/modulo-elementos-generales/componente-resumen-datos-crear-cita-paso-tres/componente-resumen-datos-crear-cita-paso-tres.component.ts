import { Component, Input, OnInit } from '@angular/core';
import { CrearCitaService } from '../../services/crear-cita.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-resumen-datos-crear-cita-paso-tres',
  templateUrl: './componente-resumen-datos-crear-cita-paso-tres.component.html',
  styleUrls: ['./componente-resumen-datos-crear-cita-paso-tres.component.css'],
})
export class ComponenteResumenDatosCrearCitaPasoTresComponent implements OnInit {

  id: number = 0;
  dni: string = '';
  fecha: string = '';
  hora: string = '';
  idRadiologo: number = 0;
  nombreRadiologo: string = '';

  @Input() mostrarResumenDatosCrearCita: boolean = false;
  citasPaso1: any[] = [];
  citasPaso2: any[] = [];

  constructor(private router: Router,private route: ActivatedRoute, private crearCitaService: CrearCitaService) {}
  
  ngOnInit() {
    this.citasPaso1 = this.crearCitaService.obtenerCitasPaso1();
    this.citasPaso2 = this.crearCitaService.obtenerCitasPaso2();
    //console.log('Citas obtenidas - Paso 1:', this.citasPaso1);
    //console.log('Citas obtenidas - Paso 2:', this.citasPaso2);

    this.route.queryParams.subscribe(params => {
      this.dni = params['dni'];
      console.log('DNI DEL USUARIO' + this.dni);

      this.id = params['id'];
      console.log('ID DEL USUARIO: ' + this.id);

      this.fecha = params['fecha'];
      console.log('FECHA DEL USUARIO' + this.fecha);

      this.hora = params['hora'];
      this.hora = decodeURIComponent(params['hora']);

      console.log('HORA DEL USUARIO: ' + this.hora);

      this.idRadiologo = params['idRadiologo'];
      console.log('ID DEL RADIOLOGO: ' + this.idRadiologo);

      this.nombreRadiologo = params['nombreRadiologo'];
      this.nombreRadiologo = decodeURIComponent(params['nombreRadiologo']);

      console.log('NOMBRE DEL RADIOLOGO: ' + this.nombreRadiologo);
      
    });
  }

  continuarAconfirmacion() {
    const citasAntiguasPaso1 = this.crearCitaService.limpiarCitasPaso1();
    const citasAntiguasPaso2 = this.crearCitaService.limpiarCitasPaso2();

    // Redirigir según sea necesario
    this.router.navigate([
      'administrativo/crearPaciente/crearPacientePaso2/crearPacientePaso3/confirmacionCreacionPaciente'
    ]);
  }
}
