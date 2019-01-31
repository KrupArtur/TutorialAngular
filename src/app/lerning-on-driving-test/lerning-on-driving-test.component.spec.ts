import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LerningOnDrivingTestComponent } from './lerning-on-driving-test.component';

describe('LerningOnDrivingTestComponent', () => {
  let component: LerningOnDrivingTestComponent;
  let fixture: ComponentFixture<LerningOnDrivingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerningOnDrivingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerningOnDrivingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
