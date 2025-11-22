import { TestBed } from '@angular/core/testing';

import { SsCoreService } from './ss-core.service';

describe('SsCoreService', () => {
  let service: SsCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
