import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementHttpManagerComponent } from './reimbursement-http-manager.component';

describe('ReimbursementHttpManagerComponent', () => {
  let component: ReimbursementHttpManagerComponent;
  let fixture: ComponentFixture<ReimbursementHttpManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementHttpManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementHttpManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
