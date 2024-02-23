import { Component, OnInit } from '@angular/core';
import { StylingService } from '../../services/styling.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-componente-caja-diagnostico',
  templateUrl: './componente-caja-diagnostico.component.html',
  styleUrls: ['./componente-caja-diagnostico.component.css'],
})
export class ComponenteCajaDiagnosticoComponent implements OnInit {
  cajaStyle: any;
  isReadonly: boolean = false;

  constructor(private stylingService: StylingService, private sharedService: SharedService) {}

  ngOnInit() {
    this.stylingService.sharedStyle$.subscribe((style) => {
      this.cajaStyle = style;
    });

    this.sharedService.readonlyStatus$.subscribe((status) => {
      this.isReadonly = status;
    });
  }
}
