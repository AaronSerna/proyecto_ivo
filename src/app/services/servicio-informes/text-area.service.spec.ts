import { TestBed } from '@angular/core/testing';

import { TextAreaService } from './text-area.service';

describe('TextAreaService', () => {
  let service: TextAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
