import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementHttpShowallreimbursementComponent } from './reimbursement-http-showallreimbursement.component';

describe('ReimbursementHttpShowallreimbursementComponent', () => {
  let component: ReimbursementHttpShowallreimbursementComponent;
  let fixture: ComponentFixture<ReimbursementHttpShowallreimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementHttpShowallreimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementHttpShowallreimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
