import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultprog3Component } from './consultprog3.component';

describe('Consultprog3Component', () => {
  let component: Consultprog3Component;
  let fixture: ComponentFixture<Consultprog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultprog3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultprog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
