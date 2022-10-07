import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationP2Component } from './consultation-p2.component';

describe('ConsultationP2Component', () => {
  let component: ConsultationP2Component;
  let fixture: ComponentFixture<ConsultationP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
