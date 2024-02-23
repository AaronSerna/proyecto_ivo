import { Component, Input } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-componente-botones-diagnostico-medico',
  templateUrl: './componente-botones-diagnostico-medico.component.html',
  styleUrls: ['./componente-botones-diagnostico-medico.component.css'],
})
export class ComponenteBotonesDiagnosticoMedicoComponent {
  estilos_textarea_deshabilitado = {
    'border-color': '#E2E7EB',
    'color': '#B8BEC9',
    'cursor' : 'auto'
  };

  estilos_textarea_habilitado = {
    'border-color': 'black',
    'color': '#515151',
    'cursor' : 'auto'
  };

  @Input() botonGenerarPDFAzul: boolean = true;
  @Input() botonGuardar: boolean = true;
  @Input() botonEditarDiagn: boolean = true;
  @Input() botonGuardarEdicion: boolean = true;

  constructor(
    private styling: StylingService,
    private sharedService: SharedService
  ) {}

  presiona_boton_guardar() {
    this.botonGenerarPDFAzul = true;
    this.botonGuardar = false;
    this.botonEditarDiagn = true;
    this.botonGuardarEdicion = false;
    this.styling.newStyle(this.estilos_textarea_deshabilitado);
    this.sharedService.updateReadonlyStatus(true);
  }

  presiona_boton_editar_diagn() {
    this.botonGenerarPDFAzul = false;
    this.botonGuardar = false;
    this.botonEditarDiagn = false;
    this.botonGuardarEdicion = true;
    this.styling.newStyle(this.estilos_textarea_habilitado);
    this.sharedService.updateReadonlyStatus(false);
  }
}
