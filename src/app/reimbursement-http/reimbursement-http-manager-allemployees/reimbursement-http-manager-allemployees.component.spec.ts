import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementHttpManagerAllemployeesComponent } from './reimbursement-http-manager-allemployees.component';

describe('ReimbursementHttpManagerAllemployeesComponent', () => {
  let component: ReimbursementHttpManagerAllemployeesComponent;
  let fixture: ComponentFixture<ReimbursementHttpManagerAllemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementHttpManagerAllemployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementHttpManagerAllemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
