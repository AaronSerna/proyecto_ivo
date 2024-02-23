import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBotonesDiagnosticoMedicoComponent } from './componente-botones-diagnostico-medico.component';

describe('ComponenteBotonesDiagnosticoMedicoComponent', () => {
  let component: ComponenteBotonesDiagnosticoMedicoComponent;
  let fixture: ComponentFixture<ComponenteBotonesDiagnosticoMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteBotonesDiagnosticoMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteBotonesDiagnosticoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
