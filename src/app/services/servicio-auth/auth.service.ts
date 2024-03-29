// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost/ivo_backend/public/api';

  constructor(private http: HttpClient) {}

  iniciarSesion(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/iniciarSesion/${email}/${password}`;
    return this.http.get<any>(url);
  }
}
