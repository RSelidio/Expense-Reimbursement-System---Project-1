import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementHttpManagerRbapprovedComponent } from './reimbursement-http-manager-rbapproved.component';

describe('ReimbursementHttpManagerRbapprovedComponent', () => {
  let component: ReimbursementHttpManagerRbapprovedComponent;
  let fixture: ComponentFixture<ReimbursementHttpManagerRbapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementHttpManagerRbapprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementHttpManagerRbapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
