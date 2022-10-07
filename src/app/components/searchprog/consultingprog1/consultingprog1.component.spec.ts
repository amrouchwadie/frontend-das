import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consultingprog1Component } from './consultingprog1.component';

describe('Consultingprog1Component', () => {
  let component: Consultingprog1Component;
  let fixture: ComponentFixture<Consultingprog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consultingprog1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consultingprog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
