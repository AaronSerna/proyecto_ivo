import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apiservice.service';
import { CitasService } from 'src/app/services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-tabla-pacientes-medico',
  templateUrl: './componente-tabla-pacientes-medico.component.html',
  styleUrls: ['./componente-tabla-pacientes-medico.component.css'],
})
export class ComponenteTablaPacientesMedicoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.dtOptions = {
      info: false,
      scrollX: true,
      scrollY: '600px',
      ajax: (dataTablesParametres: any, callback: any) => {
        this.citasService.mostrarCitasMedico(36)
        .subscribe(
          (data :any) => {
            callback({
              data:data
            });
          });
      },
      columns: [
        { title: 'Numero Cita', data: 'num_cita' },
        { title: 'Nombre del paciente', data: 'nombre_completo_paciente' },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Hora', data: 'hora' },
        {
          title: '',
          data: null,
          orderable: false,
          render: function (data: any, type: any, full: any) {
            let num_cita = full.num_cita;
            let nombrePaciente = full.nombre_completo_paciente;
            let fecha = full.fecha;
            let idCita = full.id;
            let hora = full.hora;
            return (
              '<div class="d-flex justify-content-evenly"><a class="abrirCita" href="http://"><img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>' +
              '<a class="editarCita" href="http://localhost:4200/medico/citas"><img src="../../../../../assets/images/ImagenesMedico/editarCitaMedico.svg" alt=""></a>' +
              '<a class="cancelarCita" href=""><img src="../../../../../assets/images/ImagenesMedico/cruz_cancelar_medico.svg" alt=""></a></div>'
            );
          },
        },
      ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }

  formatearEstadoCita(estadoCita: string): string {
    let estadoFormateado: string = 'Nulo';

    if (estadoCita === 'EN_CURSO') estadoFormateado = 'En curso';
    else if (estadoCita === 'CUMPLIDA') estadoFormateado = 'Completada';
    else if (estadoCita === 'CANCELADA') estadoFormateado = 'Cancelada';

    return estadoFormateado;
  }

  // TODO: Crear metodo para mostrar el nombre del paciente dado su id.
    //TODO: Arreglar la muestra de tabla, quitando cossas innecesarias.

}
