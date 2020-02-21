import { TestBed } from '@angular/core/testing';

import { PocRxjsService } from './poc-rxjs.service';

describe('PocRxjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocRxjsService = TestBed.get(PocRxjsService);
    expect(service).toBeTruthy();
  });
});
