import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  // ENDPOINTS DEL ADMINISTRATIVO:

  buscarPorDni(): Observable<any> {
    return this.http.get(
      //'http://localhost:443/ivo_backend/public/api/usuarios/buscarPorDni'
      'http://localhost/ivo_backend/public/api/usuarios/buscarPorDni'
    );
  }

  mostrarRadiologos(): Observable<any> {
    return this.http.get(
      //'http://localhost:443/ivo_backend/public/api/usuarios/mostrarRadiologos'
      'http://localhost/ivo_bakend/public/api/usuarios/mostrarRadiologos'
    );
  }

  crearUsuarioPaciente(datos: any): Observable<any> {
    // Ajusta la URL según tu configuración
    return this.http.post(
      //'http://localhost:443/ivo_backend/public/api/usuarios/crearUsuarioPaciente', datos
      'http://localhost/ivo_backend/public/api/usuarios/crearUsuarioPaciente', datos
    );
  }

  mostrarTodosLosMedicos(): Observable<any> {
    return this.http.get(
      //'http://localhost:443/ivo_backend/public/api/usuarios/mostrarRadiologos'
      'http://localhost/ivo_bakend/public/api/usuarios/mostrarTodosLosMedicos'
    );
  }
}

