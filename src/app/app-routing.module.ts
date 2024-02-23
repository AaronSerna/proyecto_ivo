import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTS LOGIN:
import { ComponenteLoginComponent } from './componente-login/componente-login.component';


// IMPORTS ADMINISTRATIVO:
import { ComponenteCitasAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-citas-administrativo/componente-citas-administrativo.component';
import { ComponenteCrearCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-administrativo.component';
import { ComponenteCrearPacienteAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-administrativo.component';
import { ComponenteModificarCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-administrativo.component';
import { ComponenteModificarCitaPasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/componente-modificar-cita-paso-dos/componente-modificar-cita-paso-dos.component';
import { ConfirmacionModificacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-modificar-cita-administrativo/confirmacion-modificacion-cita/confirmacion-modificacion-cita.component';
import { ComponenteEliminarCitaAdministrativoComponent } from './modulo-administrativo/componente-administrativo/componente-eliminar-cita-administrativo/componente-eliminar-cita-administrativo.component';
import { ConfirmacionEliminacionCitaComponent } from './modulo-administrativo/componente-administrativo/componente-eliminar-cita-administrativo/confirmacion-eliminacion-cita/confirmacion-eliminacion-cita.component';
import { ComponenteCrearCitaPasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-dos/componente-crear-cita-paso-dos.component';
import { ComponenteCrearCitaPasoTresComponent } from './modulo-administrativo/componente-administrativo/componente-crear-cita-administrativo/componente-crear-cita-paso-tres/componente-crear-cita-paso-tres.component';
import { ComponenteCrearPacientePasoDosComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-dos/componente-crear-paciente-paso-dos.component';
import { ComponenteCrearPacientePasoTresComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/componente-crear-paciente-paso-tres/componente-crear-paciente-paso-tres.component';
import { ConfirmacionCreacionPacienteComponent } from './modulo-administrativo/componente-administrativo/componente-crear-paciente-administrativo/confirmacion-creacion-paciente/confirmacion-creacion-paciente.component';

// IMPORTS RADIÓLOGO:
import { ComponenteRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-radiologo.component';
import { ComponenteBuscarCitaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-buscar-cita-radiologo/componente-buscar-cita-radiologo.component';
import { ComponenteCitaRadiologoComponent } from './modulo-radiologo/componente-radiologo/componente-cita-radiologo/componente-cita-radiologo.component';
import { ComponenteConfirmacionInformeComponent } from './modulo-radiologo/componente-radiologo/componente-confirmacion-informe/componente-confirmacion-informe.component';

// IMPORTS MÉDICO:
import { ComponenteMedicoComponent } from './modulo-medico/componente-medico/componente-medico.component';
import { ComponenteInicioMedicoComponent } from './modulo-medico/componente-medico/componente-inicio-medico/componente-inicio-medico.component';
import { ComponenteCitaMedicoComponent } from './modulo-medico/componente-medico/componente-cita-medico/componente-cita-medico.component';

// IMPORTS PACIENTE:
import { ComponentePacienteComponent } from './modulo-paciente/componente-paciente/componente-paciente.component';
import { ComponentePedirCitaPacienteComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente.component';
import { ComponentePedirCitaPasoDosComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-dos/componente-pedir-cita-paso-dos.component';
import { ComponentePedirCitaPasoTresComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-tres/componente-pedir-cita-paso-tres.component';
import { ComponentePedirCitaPasoCuatroComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cuatro/componente-pedir-cita-paso-cuatro.component';
import { ComponentePedirCitaPasoCincoComponent } from './modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paso-cinco/componente-pedir-cita-paso-cinco.component';

import { ComponenteMisCitasPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-mis-citas-paciente.component';
import { ComponenteCitaFacultativoPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cita-facultativo-paciente/componente-cita-facultativo-paciente.component';
import { ComponenteCitaEspecialistaPacienteComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cita-especialista-paciente/componente-cita-especialista-paciente.component';
import { ComponentePedirCitaPacienteFinalComponent } from "./modulo-paciente/componente-paciente/componente-pedir-cita-paciente/componente-pedir-cita-paciente-final/componente-pedir-cita-paciente-final.component";
import { ComponenteCancelarCitaPacienteComponent } from "./modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente/componente-cancelar-cita-paciente.component";
import { ComponenteCancelarCitaPacienteFinalComponent } from './modulo-paciente/componente-paciente/componente-mis-citas-paciente/componente-cancelar-cita-paciente-final/componente-cancelar-cita-paciente-final.component';

//import { ComponenteConfirmacionComponent } from './modulo-elementos-generales/componente-confirmacion/componente-confirmacion.component';


const routes: Routes = [

  // LOGIN
  { path: 'login', component: ComponenteLoginComponent },

  // ADMINISTRATIVO
  { path: 'administrativo', component: ComponenteCitasAdministrativoComponent },

  { path: 'administrativo/citas', component: ComponenteCitasAdministrativoComponent },

  { path: 'administrativo/crearPaciente', component: ComponenteCrearPacienteAdministrativoComponent },
  { path: 'administrativo/crearPaciente/crearPacientePaso2', component: ComponenteCrearPacientePasoDosComponent },
  { path: 'administrativo/crearPaciente/crearPacientePaso2/crearPacientePaso3', component: ComponenteCrearPacientePasoTresComponent },
  { path: 'administrativo/crearPaciente/crearPacientePaso2/crearPacientePaso3/confirmacionCreacionPaciente', component: ConfirmacionCreacionPacienteComponent },

  { path: 'administrativo/crearCita', component: ComponenteCrearCitaAdministrativoComponent },
  { path: 'administrativo/crearCita/crearCitaPaso1', component: ComponenteCrearCitaAdministrativoComponent },
  { path: 'administrativo/crearCita/crearCitaPaso1/crearCitaPaso2', component: ComponenteCrearCitaPasoDosComponent },
  { path: 'administrativo/crearCita/crearCitaPaso1/crearCitaPaso2/crearCitaPaso3', component: ComponenteCrearCitaPasoTresComponent },
  { path: 'administrativo/crearCita/crearCitaPaso1/crearCitaPaso2/crearCitaPaso3/confirmacionCreacionCita', component: ComponenteCrearCitaPasoTresComponent },

  { path: 'administrativo/modificarCita', component: ComponenteModificarCitaAdministrativoComponent },
  { path: 'administrativo/modificarCita/modificarCitaPaso2', component: ComponenteModificarCitaPasoDosComponent },
  { path: 'administrativo/modificarCita/modificarCitaPaso2/confirmacionModificarCita', component: ConfirmacionModificacionCitaComponent },

  { path: 'administrativo/eliminarCita', component: ComponenteEliminarCitaAdministrativoComponent },
  { path: 'administrativo/eliminarCita/confirmacionEliminarCita', component: ConfirmacionEliminacionCitaComponent },

  

  // RADIÓLOGO:
  { path: 'radiologo', component: ComponenteRadiologoComponent },
  { path: 'radiologo/buscarCita', component: ComponenteBuscarCitaRadiologoComponent },
  { path: 'radiologo/buscarCita/citas', component: ComponenteCitaRadiologoComponent },
  { path: 'radiologo/buscarCita/citas/confirmacion', component: ComponenteConfirmacionInformeComponent },

  // MÉDICO:
  {
    path: 'medico',
    component: ComponenteMedicoComponent,
    children: [
      { path: 'inicio', component: ComponenteInicioMedicoComponent },
      { path: 'citas', component: ComponenteCitaMedicoComponent },
    ],
  },

  // PACIENTE:
  { path: 'paciente', component: ComponentePacienteComponent },

  { path: 'paciente/pedirCita', component: ComponentePedirCitaPacienteComponent },

  { path: 'paciente/pedirCita/pedirCitaPaso2', component: ComponentePedirCitaPasoDosComponent },
  { path: 'paciente/pedirCita/pedirCitaPaso3', component: ComponentePedirCitaPasoTresComponent },
  { path: 'paciente/pedirCita/pedirCitaPaso4', component: ComponentePedirCitaPasoCuatroComponent },
  { path: 'paciente/pedirCita/pedirCitaPaso5', component: ComponentePedirCitaPasoCincoComponent },
  { path: 'paciente/pedirCita/confirmacion', component: ComponentePedirCitaPacienteFinalComponent },

  { path: 'paciente/misCitas', component: ComponenteMisCitasPacienteComponent },

  { path: 'paciente/misCitas/cancelarCita', component: ComponenteCancelarCitaPacienteComponent },
  { path: 'paciente/misCitas/cancelarCitaConfirmacion', component: ComponenteCancelarCitaPacienteFinalComponent },

  { path: 'paciente/misCitas/citaEspecialista', component: ComponenteCitaEspecialistaPacienteComponent },
  { path: 'paciente/misCitas/citaFacultativo', component: ComponenteCitaFacultativoPacienteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
