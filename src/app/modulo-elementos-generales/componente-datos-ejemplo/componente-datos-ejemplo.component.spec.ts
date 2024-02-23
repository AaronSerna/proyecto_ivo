import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDatosEjemploComponent } from './componente-datos-ejemplo.component';

describe('ComponenteDatosEjemploComponent', () => {
  let component: ComponenteDatosEjemploComponent;
  let fixture: ComponentFixture<ComponenteDatosEjemploComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteDatosEjemploComponent]
    });
    fixture = TestBed.createComponent(ComponenteDatosEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
