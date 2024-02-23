import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css'],
})
export class MenuUsuariosComponent {
  titulos: string[] = [
    // RUTAS ADMINISTRATIVO:
    'CitasAdmin',
    'Crear paciente',
    'Crear cita',
    '',

    // RUTAS RADIÓLOGO:
    'Buscar cita',
    'CitasRadiologo',
    '',

    // RUTAS MÉDICO:
    'Inicio',
    'CitaMedico',
    '',
  ];

  imagenes: string[] = [

    // IMÁGENES ADMINISTRATIVO:
    '../../../assets/images/ImagenesAdministrativo/Citas.svg',
    '../../../assets/images/ImagenesAdministrativo/crearPaciente.svg',
    '../../../assets/images/ImagenesAdministrativo/crearCita.svg',
    '../../../assets/images/ImagenesAdministrativo/usuario.svg',

    // IMÁGENES RADIÓLOGO:
    '../../../assets/images/ImagenesRadiologo/BuscarCita.svg',
    '../../../assets/images/ImagenesRadiologo/citasRadiologo.svg',
    '../../../assets/images/ImagenesRadiologo/usuario.svg',

    // IMÁGENES MÉDICO:
    '../../../assets/images/ImagenesMedico/inicio.svg',
    '../../../assets/images/ImagenesMedico/citaMedico.svg',
    '../../../assets/images/ImagenesMedico/usuario.svg',
  ];

  // Método usado para dirigir al usuario a las rutas dependiendo de los iconos (enlaces) pinchados
  obtenerRuta(enlace: string): string {
    const rutas: { [key: string]: string } = {
      //ADMINISTRATIVO:
      CitasAdmin: 'administrativo/citas',
      'Crear paciente': 'administrativo/crearPaciente',
      'Crear cita': 'administrativo/crearCita',

      //RADIÓLOGO:
      'Buscar cita': 'radiologo/buscarCita',
      CitasRadiologo: 'radiologo/citas',

      //MÉDICO:
      Inicio: 'medico/inicio',
      CitaMedico: 'medico/citas',
    };
    return rutas[enlace];
  }
}
