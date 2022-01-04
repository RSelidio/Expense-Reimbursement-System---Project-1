import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementEditHttpComponent } from './reimbursement-edit-http.component';

describe('ReimbursementEditHttpComponent', () => {
  let component: ReimbursementEditHttpComponent;
  let fixture: ComponentFixture<ReimbursementEditHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementEditHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementEditHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
