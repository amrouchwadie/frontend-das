import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultprog4Component } from './consultprog4.component';

describe('Consultprog4Component', () => {
  let component: Consultprog4Component;
  let fixture: ComponentFixture<Consultprog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultprog4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultprog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
