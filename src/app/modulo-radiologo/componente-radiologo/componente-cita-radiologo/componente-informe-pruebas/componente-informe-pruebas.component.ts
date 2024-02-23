import { Component, Input, OnInit } from '@angular/core';
import { TextAreaService } from 'src/app/services/servicio-informes/text-area.service';

@Component({
  selector: 'app-componente-informe-pruebas',
  templateUrl: './componente-informe-pruebas.component.html',
  styleUrls: ['./componente-informe-pruebas.component.css']
})
export class ComponenteInformePruebasComponent implements OnInit {
  @Input() anchoInforme: number = 0;
  @Input() alturaInforme: number= 0;
  @Input() id: string='';

  textAreaContent: string='';
  
  constructor(private textAreaService: TextAreaService) {}

  ngOnInit() {
    this.textAreaContent = this.textAreaService.getContent(this.id);
  }

  saveContent() {
    this.textAreaService.saveContent(this.id, this.textAreaContent);
  }
}
