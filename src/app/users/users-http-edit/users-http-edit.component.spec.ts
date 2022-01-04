import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHttpEditComponent } from './users-http-edit.component';

describe('UsersHttpEditComponent', () => {
  let component: UsersHttpEditComponent;
  let fixture: ComponentFixture<UsersHttpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersHttpEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHttpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
