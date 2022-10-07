import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seachprog3Component } from './seachprog3.component';

describe('Seachprog3Component', () => {
  let component: Seachprog3Component;
  let fixture: ComponentFixture<Seachprog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seachprog3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seachprog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
