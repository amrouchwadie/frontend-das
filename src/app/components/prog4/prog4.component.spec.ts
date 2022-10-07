import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prog4Component } from './prog4.component';

describe('Prog4Component', () => {
  let component: Prog4Component;
  let fixture: ComponentFixture<Prog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prog4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
