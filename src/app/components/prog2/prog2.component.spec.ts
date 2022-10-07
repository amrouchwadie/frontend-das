import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prog2Component } from './prog2.component';

describe('Prog2Component', () => {
  let component: Prog2Component;
  let fixture: ComponentFixture<Prog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
