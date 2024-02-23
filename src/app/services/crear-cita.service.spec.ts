import { TestBed } from '@angular/core/testing';

import { CrearCitaService } from './crear-cita.service';

describe('CrearCitaService', () => {
  let service: CrearCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
