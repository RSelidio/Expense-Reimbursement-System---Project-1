import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard.service';

describe('Admin.GuardService', () => {
  let service: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
