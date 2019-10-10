import { TestBed } from '@angular/core/testing';

import { AvionDataService } from './avion-data.service';

describe('AvionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvionDataService = TestBed.get(AvionDataService);
    expect(service).toBeTruthy();
  });
});
