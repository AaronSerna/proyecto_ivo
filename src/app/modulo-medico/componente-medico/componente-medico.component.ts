import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-componente-medico',
  templateUrl: './componente-medico.component.html',
  styleUrls: ['./componente-medico.component.css']
})
export class ComponenteMedicoComponent {
  rutaActiva: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.detectarRuta();
      });
  }

  // Método para detectar la ruta activa y cargar un componente u otro.
  private detectarRuta(): void {
    const ruta = this.router.url;
    this.rutaActiva = '';

    switch (ruta) {
      case '/medico/citas':
        console.log('Ruta citas del medico');
        this.rutaActiva = 'citas-medico';
        break;

      case '/medico/inicio':
        console.log('Ruta inicio del medico');
        this.rutaActiva = 'inicio-medico';
        break;

      default:
        console.log('No existe la ruta');
    }
  }
}
