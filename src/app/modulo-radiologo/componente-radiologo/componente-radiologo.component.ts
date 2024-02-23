import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-componente-radiologo',
  templateUrl: './componente-radiologo.component.html',
  styleUrls: ['./componente-radiologo.component.css']
})
export class ComponenteRadiologoComponent implements OnInit {
  rutaActiva: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.detectarRuta();
      });
  }

  private detectarRuta(): void {
    const ruta = this.router.url;
    this.rutaActiva = '';

    switch (ruta) {
      case '/radiologo/buscarCita':
        console.log('Estas en la ruta buscar citas del radiologo');
        this.rutaActiva = 'buscarCita';
        break;

      case '/radiologo/citas':
        console.log('Estas en la ruta citas del radiologo');
        this.rutaActiva = 'citas';
        break;

      case '/radiologo/citas/confirmacion':
        console.log('Estas en la ruta confirmacion del radiologo');
        this.rutaActiva = 'confirmacion';
        break;

      default:
        console.log('Estas en una ruta no reconocida del admin');
    }
  }

}
