import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suiviprog2Component } from './suiviprog2.component';

describe('Suiviprog2Component', () => {
  let component: Suiviprog2Component;
  let fixture: ComponentFixture<Suiviprog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Suiviprog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Suiviprog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
