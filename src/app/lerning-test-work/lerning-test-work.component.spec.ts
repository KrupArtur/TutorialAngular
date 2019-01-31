import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LerningTestWorkComponent } from './lerning-test-work.component';

describe('LerningTestWorkComponent', () => {
  let component: LerningTestWorkComponent;
  let fixture: ComponentFixture<LerningTestWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerningTestWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerningTestWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
