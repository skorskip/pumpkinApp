import { TestBed } from '@angular/core/testing';

import { PetDataService } from './pet-data.service';

describe('PetDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetDataService = TestBed.get(PetDataService);
    expect(service).toBeTruthy();
  });
});
