import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationP3Component } from './consultation-p3.component';

describe('ConsultationP3Component', () => {
  let component: ConsultationP3Component;
  let fixture: ComponentFixture<ConsultationP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
