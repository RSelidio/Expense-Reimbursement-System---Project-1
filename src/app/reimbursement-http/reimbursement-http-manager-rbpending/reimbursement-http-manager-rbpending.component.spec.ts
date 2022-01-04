import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementHttpManagerRbpendingComponent } from './reimbursement-http-manager-rbpending.component';

describe('ReimbursementHttpManagerRbpendingComponent', () => {
  let component: ReimbursementHttpManagerRbpendingComponent;
  let fixture: ComponentFixture<ReimbursementHttpManagerRbpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementHttpManagerRbpendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementHttpManagerRbpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
