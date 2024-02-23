import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from '../../../../services/servicio-citas/citas.service';

@Component({
  selector: 'app-componente-caja-blanca-mediana',
  templateUrl: './componente-caja-blanca-mediana.component.html',
  styleUrls: ['./componente-caja-blanca-mediana.component.css'],
})
export class ComponenteCajaBlancaMedianaComponent {
  form: FormGroup; //creamos un formGroup

  id: string = '';
  nombrePaciente: string = '';
  dniPaciente: string = '';
  num_cita: string = '';
  citas: any[] = []; // Array para almacenar los números de cita

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private citasService: CitasService
  ) {
    this.form = this.fb.group({
      //se crea un nuevo formGroup
      numeroCita: [
        '',
        [Validators.required, Validators.pattern(/^\d{5}[a-zA-Z]$/)],
      ], //numeroCita es el nombre del formGroup y el valor inicial será un string vacío ''
    });
  }

  siguiente() {
    if (this.form.valid) {
      const numCitaInput = this.form.get('numeroCita');
      if (numCitaInput && numCitaInput.value) {
        const cita = this.citas.find((c) => c.num_cita === numCitaInput.value);
        if (cita) {
          this.id = cita.id;
          this.nombrePaciente = cita.nombre_completo_paciente;
          this.dniPaciente = cita.dni_paciente;
          this.router.navigate(['radiologo/buscarCita/citas'], {
            queryParams: {
              id: encodeURIComponent(this.id),
              nombrePaciente: encodeURIComponent(this.nombrePaciente),
              dniPaciente: encodeURIComponent(this.dniPaciente),
            },
          });
        } else {
          alert('El número de cita no existe');
        }
      }
    }
  }

  comprobarNumCita() {
    this.citasService.comprobarNumeroDeCita().subscribe((data: any) => {
      this.citas = data.map((cita: any) => ({
        id: cita.id,
        num_cita: cita.num_cita,
        nombre_completo_paciente: cita.nombre_completo_paciente,
        dni_paciente: cita.dni_paciente,
      }));
      this.siguiente(); // Llama a la función siguiente() después de obtener las citas
    });
  }
}
