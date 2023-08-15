import { TestBed } from '@angular/core/testing';

import { MassagesService } from './massages.service';

describe('MassagesService', () => {
  let service: MassagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
