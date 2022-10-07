import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultprog2Component } from './consultprog2.component';

describe('Consultprog2Component', () => {
  let component: Consultprog2Component;
  let fixture: ComponentFixture<Consultprog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultprog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultprog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
