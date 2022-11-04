import { TestBed } from '@angular/core/testing';

import { CaractersService } from './caracters.service';

describe('CaractersService', () => {
  let service: CaractersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaractersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
