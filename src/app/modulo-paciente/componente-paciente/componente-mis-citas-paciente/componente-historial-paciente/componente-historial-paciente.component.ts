import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitasService } from '../../../../services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-historial-paciente',
  templateUrl: './componente-historial-paciente.component.html',
  styleUrls: ['./componente-historial-paciente.component.css'],
})
export class ComponenteHistorialPacienteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dataTable: any;

  // constructor(private http: HttpClient) {}
  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.initDataTable();
  }

  initDataTable() {
    // Configuración de DataTables
    this.dtOptions = {
      scrollY: '260px',
      info: false,
      responsive: true,
      createdRow: (
        // Añadimos al <td'> que contiene el campo 'estado - CANCELADA' un nuevo class para cambiarle el color.
        row: Node | HTMLTableRowElement,
        data: any,
        dataIndex: number
      ) => {
        if (data.estado === 'CANCELADA') {
          (row as HTMLTableRowElement).classList.add('citaCancelada');
        } else if (data.estado === 'CUMPLIDA') {
          (row as HTMLTableRowElement).classList.add('citaCumplida');
        } else if (data.estado === 'EN_CURSO') {
          (row as HTMLTableRowElement).classList.add('citaEnCurso');
        }
      },

      ajax: (dataTablesParameters: any, callback: any) => {
        //En lugar de 37 habrá que poner el ID del paciente correspondiente.
        
        // Nos conectamos al servicio/endpoint que creamos:
        this.citasService.mostrarCitasDelPaciente(37).subscribe((data: any) => {
          callback({
            data: data,
          });
        });
      },
      columns: [
        { title: 'Nº de cita', data: 'num_cita' },
        { title: 'Tipo de cita', data: 'tipo_cita' },
        { title: 'Médico', data: 'nombre_completo_medico' },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Hora', data: 'hora' },
        { title: 'Estado', data: 'estado' },

        {
          title: '',
          data: 'null',

          orderable: false,
          render: function (data: any, type: any, full: any) {
            var numCita = full.num_cita;
            var idCita = full.id;
            var tipoCita = full.tipo_cita;
            var nombreDoctor = full.nombre_completo_medico;
            var fechaCita = full.fecha;
            var horaCita = full.hora;

            var abrirCitaUrl = '';
            var papeleraCitaUrl = '';

            if (tipoCita === 'Radiologia') {
              abrirCitaUrl = `http://localhost:4200/paciente/misCitas/citaEspecialista?id=${idCita}&nombreDoctor=${nombreDoctor}&tipoCita=${tipoCita}&fechaCita=${fechaCita}&horaCita=${horaCita}`;
              papeleraCitaUrl = `http://localhost:4200/paciente/misCitas/citaEspecialista?id=${idCita}&nombreDoctor=${nombreDoctor}&tipoCita=${tipoCita}&fechaCita=${fechaCita}&horaCita=${horaCita}`;
            } else if (tipoCita === 'Medicina General') {
              abrirCitaUrl = `http://localhost:4200/paciente/misCitas/citaFacultativo?id=${idCita}&nombreDoctor=${nombreDoctor}&tipoCita=${tipoCita}&fechaCita=${fechaCita}&horaCita=${horaCita}`;
              papeleraCitaUrl = `http://localhost:4200/paciente/misCitas/cancelarCita?numCita=${numCita}`;
            }

            //TODO: La papelera debe ser un pop-up para eliminar la cita, no debería llevar a ninguna ruta diferente.

            return (
              '<div class="d-flex flex-row iconos">' +
              `<a href="${abrirCitaUrl}"><img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>` +
              `<a href="${papeleraCitaUrl}"><img src="../../../../../assets/images/ImagenesGenerales/papelera.svg"  class="papelera" alt=""></a>` +
              '</div>'
            );
          },
        },
      ],
      order: [[3, 'desc']], // Ordenar las fechas por las más recientes.
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }
}
