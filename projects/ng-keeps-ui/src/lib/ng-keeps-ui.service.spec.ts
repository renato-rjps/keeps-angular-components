import { TestBed } from '@angular/core/testing';

import { NgKeepsUiService } from './ng-keeps-ui.service';

describe('NgKeepsUiService', () => {
  let service: NgKeepsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgKeepsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
