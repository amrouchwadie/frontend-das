import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationP4Component } from './consultation-p4.component';

describe('ConsultationP4Component', () => {
  let component: ConsultationP4Component;
  let fixture: ComponentFixture<ConsultationP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationP4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
