import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburstmentHttpManagerHomepageComponent } from './reimburstment-http-manager-homepage.component';

describe('ReimburstmentHttpManagerHomepageComponent', () => {
  let component: ReimburstmentHttpManagerHomepageComponent;
  let fixture: ComponentFixture<ReimburstmentHttpManagerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburstmentHttpManagerHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburstmentHttpManagerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
