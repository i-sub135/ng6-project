import { TestBed, inject } from '@angular/core/testing';

import { KendaraanService } from './kendaraan.service';

describe('KendaraanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KendaraanService]
    });
  });

  it('should be created', inject([KendaraanService], (service: KendaraanService) => {
    expect(service).toBeTruthy();
  }));
});
