import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-barra-padre',
  templateUrl: './barra-padre.component.html',
  styleUrls: ['./barra-padre.component.css'],
})
export class BarraPadreComponent {

  salir: string = 'Salir';
  mostrarBarra: boolean = true;
  
}
