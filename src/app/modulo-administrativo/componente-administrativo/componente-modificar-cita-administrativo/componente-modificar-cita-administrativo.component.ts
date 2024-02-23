import { Component, Input } from '@angular/core';
import { CitasService } from '../../../services/servicio-citas/citas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el servicio Router
import { CrearCitaService } from '../../../services/crear-cita.service';
import { UsuariosService } from '../../../services/servicio-usuarios/usuarios.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-componente-modificar-cita-administrativo',
  templateUrl: './componente-modificar-cita-administrativo.component.html',
  styleUrls: ['./componente-modificar-cita-administrativo.component.css']
})
export class ComponenteModificarCitaAdministrativoComponent {
  formulario: FormGroup;
  medicos: any[] = [];

  numCita: string = '';
  nombrePaciente: string = '';
  fecha: string = '';
  hora: string = '';
  medico: string = '';
  idMedico: number = 0;
  nombreMedico: string = '';


  constructor(
    private router: Router,
    private crearCitaService: CrearCitaService,
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder,
    private citasService: CitasService,
    private route: ActivatedRoute
  ) {
    this.formulario = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
    });
  }

  modificarCita() {
    if (this.formulario.valid) {
      this.router.navigate(
        ['administrativo/modificarCita/modificarCitaPaso2/confirmacionModificarCita'],
        {
          queryParams: {
            numCita: encodeURIComponent(this.numCita),
            nombrePaciente: encodeURIComponent(this.nombrePaciente),
            fecha: encodeURIComponent(this.fecha),
            hora: encodeURIComponent(this.hora),
          }
        }
      );
    }
  }

  ngOnInit() {
    this.obtenerTodosLosMedicos();
    console.log(this.medicos);
    this.route.queryParams.subscribe((params) => {
      this.numCita = params['numCita'] || '';
      this.nombrePaciente = params['nombrePaciente'] || '';
      this.fecha = params['fecha'] || '';
      this.hora = params['hora'] || '';
      this.medico = params['medico'] || '';
    });
  }

  guardarValueMedico(medicoSeleccionado: any) {
    if (medicoSeleccionado) {
      // Si se encuentra, asigna su nombre_completo a nombreRadiologo
      this.medico = medicoSeleccionado.nombre_completo;
    } else {
      // Manejo si el radiólogo no se encuentra (puedes ajustarlo según tus necesidades)
      this.medico = 'No seleccionado';
    }

    // Utiliza directamente el objeto radiologo en lugar de solo el usuario_id
    this.idMedico = medicoSeleccionado ? medicoSeleccionado.usuario_id : null;
  }

  obtenerTodosLosMedicos() {
    this.usuariosService.mostrarTodosLosMedicos().subscribe((response) => {
      this.medicos = response.usuarios;
    });
  }
}
