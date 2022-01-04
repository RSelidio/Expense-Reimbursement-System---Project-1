import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementListHttpComponent } from './reimbursement-list-http-employee-rbcrud.component';

describe('ReimbursementListHttpComponent', () => {
  let component: ReimbursementListHttpComponent;
  let fixture: ComponentFixture<ReimbursementListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementListHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementListHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
