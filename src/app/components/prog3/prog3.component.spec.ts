import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prog3Component } from './prog3.component';

describe('Prog3Component', () => {
  let component: Prog3Component;
  let fixture: ComponentFixture<Prog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prog3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
