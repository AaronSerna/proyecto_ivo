import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  constructor(private http: HttpClient) {}

  mostrarImagenesDelPaciente(idInforme: string): Observable<any> {
    return this.http.get(
      `http://localhost:443/ivo_backend/public/api/imagenes/mostrarImagenesDelPaciente/${idInforme}`
      //`http://localhost/ivo_backend/public/api/imagenes/mostrarImagenesDelPaciente/${idInforme}`
    );
  }
}
