import { TestBed } from '@angular/core/testing';

import { ReimbursementHttpService } from './reimbursement-http.service';

describe('ReimbursementService', () => {
  let service: ReimbursementHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimbursementHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
