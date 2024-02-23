import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute aquí
import { CitasService } from '../../../services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-eliminar-cita-administrativo',
  templateUrl: './componente-eliminar-cita-administrativo.component.html',
  styleUrls: ['./componente-eliminar-cita-administrativo.component.css']
})
export class ComponenteEliminarCitaAdministrativoComponent {
  
  nombrePaciente: string = '';
  numCita: string = '';

  constructor(
    private citasService: CitasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obtener el valor de los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.nombrePaciente = params['nombrePaciente'] || '';
      this.numCita = params['numCita'] || ''; // Almacenamos en la variable numCita el número de la cita pasado por la URL.

    });
  }

  cancelarCita() {
    console.log(this.numCita);
    this.citasService.cancelarCita(this.numCita)
      .subscribe((data: any) => {
        // Cancelamos la cita.
    });
  }
}
