import { TestBed, inject } from '@angular/core/testing';

import { GpusService } from './gpus.service';

describe('GpusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpusService]
    });
  });

  it('should be created', inject([GpusService], (service: GpusService) => {
    expect(service).toBeTruthy();
  }));
});
