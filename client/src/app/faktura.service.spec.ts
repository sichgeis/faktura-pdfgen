import { TestBed } from '@angular/core/testing';

import { FakturaService } from './faktura.service';

describe('FakturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakturaService = TestBed.get(FakturaService);
    expect(service).toBeTruthy();
  });
});
