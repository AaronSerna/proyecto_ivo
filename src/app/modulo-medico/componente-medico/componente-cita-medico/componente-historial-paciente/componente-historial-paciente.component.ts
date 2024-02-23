import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-historial-paciente',
  templateUrl: './componente-historial-paciente.component.html',
  styleUrls: ['./componente-historial-paciente.component.css']
})
export class ComponenteHistorialPacienteComponent {
  ocultarPopUp: boolean = true;

  togglePopup() : void {
    this.ocultarPopUp = !this.ocultarPopUp;
  }

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      searching: false,
      info: false,
      scrollX: true,
      scrollY: '330px',
      ajax: {
        url: 'http://127.0.0.1:8000/api/historiales',
        dataSrc: '',
      },
      columns: [
        { title: 'ID Paciente', data: 'id_paciente' },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Hora', data: 'hora' },
        { title: 'ID Medico', data: 'id_medico' },
        { title: 'Tipo de cita', data: 'tipo_cita' },
        {
          title: '',
          data: null,
          orderable: false,
          render: function (data: any, type: any, full: any) {
            return (
              '<a href="http://"><img src="../../../../../assets/images/ImagenesMedico/abrirCitaMedico.svg" alt=""></a>');
          },
        },
      ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
  }

  //TODO: Arreglar la muestra de tabla, quitando cossas innecesarias.
}
