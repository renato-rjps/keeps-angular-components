import { TestBed } from '@angular/core/testing';

import { KpComponentsService } from './kp-components.service';

describe('KpComponentsService', () => {
  let service: KpComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
