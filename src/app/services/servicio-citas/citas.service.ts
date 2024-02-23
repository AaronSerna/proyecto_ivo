import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  constructor(private http: HttpClient) {}

  // ENDPOINTS DEL PACIENTE:

  mostrarCitasDelPaciente(pacienteId: number): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/citas/mostrarCitasDelPaciente/${pacienteId}`
      `http://localhost/ivo_backend/public/api/citas/mostrarCitasDelPaciente/${pacienteId}`
    );
  }

  mostrarDiagnosticoDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/diagnosticos/mostrarDiagnosticoDelPaciente/${idCita}`
      `http://localhost/ivo_backend/public/api/diagnosticos/mostrarDiagnosticoDelPaciente/${idCita}`
    );
  }

  mostrarInformeDelPaciente(idCita: string): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/informes/mostrarInformeDelPaciente/${idCita}`
      `http://localhost/ivo_backend/public/api/informes/mostrarInformeDelPaciente/${idCita}`
    );
  }

  /*
  cancelarCita(numCita: string): Observable<any> {
    return this.http.post(
      `http://localhost:443/ivo_backend/public/api/citas/cancelarCita/${numCita}`
      //`http://localhost/ivo_backend/public/api/citas/cancelarCita/${numCita}`
    );
  }*/

  cancelarCita(numCita: string): Observable<any> {
    let url = `http://localhost/ivo_backend/public/api/citas/cancelarCita/${numCita}`;
    return this.http.post(url, null); // Proporciona null como el cuerpo
  }

  // ENDPOINTS DEL RADIÓLOGO:

  comprobarNumeroDeCita(): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/citas/comprobarNumCita`
      `http://localhost/ivo_backend/public/api/citas/comprobarNumCita`
    );
  }

  // ENDPOINTS DEL ADMINISTRATIVO:

  mostrarCitasDelDia(): Observable<any> {
    return this.http.get(
      //`http://localhost:443/ivo_backend/public/api/citas/mostrarCitasDelDia`
      `http://localhost/ivo_backend/public/api/citas/mostrarCitasDelDia`
    );
  }
  
    // ENDPOINTS DEL RADIÓLOGO:

    mostrarCitasMedico(id_medico: number): Observable<any> {
      return this.http.get(
                //`http://127.0.0.1:8000/api/citas/mostrarCitasMedico/${id_medico}`
        `http://localhost/ivo_backend/public/api/citas/mostrarCitasMedico/${id_medico}`
      );
    }
}
