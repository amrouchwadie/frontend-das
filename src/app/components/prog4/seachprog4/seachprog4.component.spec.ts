import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seachprog4Component } from './seachprog4.component';

describe('Seachprog4Component', () => {
  let component: Seachprog4Component;
  let fixture: ComponentFixture<Seachprog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seachprog4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seachprog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
