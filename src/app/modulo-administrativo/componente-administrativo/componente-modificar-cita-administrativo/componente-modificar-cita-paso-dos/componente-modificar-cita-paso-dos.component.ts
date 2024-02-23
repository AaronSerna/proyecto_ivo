import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente-modificar-cita-paso-dos',
  templateUrl: './componente-modificar-cita-paso-dos.component.html',
  styleUrls: ['./componente-modificar-cita-paso-dos.component.css']
})
export class ComponenteModificarCitaPasoDosComponent {
  @Input() rutaBotonSi: string = ''; //VARIABLE PARA LA RUTA DEL BOTON SI
  @Input() rutaBotonCancelar: string = ''; //VARIABLE PARA LA RUTA DEL BOTON CANCELAR
}
