import { Component } from '@angular/core';
import { AuthService } from '../services/servicio-auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-login',
  templateUrl: './componente-login.component.html',
  styleUrls: ['./componente-login.component.css']
})
export class ComponenteLoginComponent {

  email: string = ''; // Declarar la propiedad email
  password: string = ''; // Declarar la propiedad password
  errorMensaje: string = ''; // Declarar la propiedad errorMensaje

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.iniciarSesion(this.email, this.password)
      .subscribe(
        (response) => {
          this.router.navigate(['/dashboard']); // Reemplaza '/dashboard' con tu ruta deseada
        },
        (error) => {
          console.error(error);
          this.errorMensaje = 'Credenciales incorrectas';
        }
      );
  }

  contrasenaUsuario: string = '';
  contrasenaVisible: boolean = false;
  rutaIcono: string = '../../assets/images/ImagenesGenerales/iconoOjoCerradoLogin.svg';

  ngOnInit() {}

  cambiarVisibilidadIcono() {
    this.contrasenaVisible = !this.contrasenaVisible;  // Si la contraseña era invisible, ahora es visible (y viceversa).
    this.rutaIcono = this.contrasenaVisible
      ? '../../assets/images/ImagenesGenerales/iconoOjoAbiertoLogin.svg'
      : '../../assets/images/ImagenesGenerales/iconoOjoCerradoLogin.svg';
  }

  iniciarSesion() {
    // Obtener datos del formulario, por ejemplo: this.email y this.password

    this.authService.iniciarSesion(this.email, this.password)
      .subscribe(
        (response) => {
          // Autenticación exitosa, redirige a la página correspondiente según el rol
          this.router.navigate(['/administrativo/citas']); // Reemplaza '/dashboard' con tu ruta deseada
        },
        
      );
  }

  

}
