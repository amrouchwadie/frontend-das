import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suiviprog3Component } from './suiviprog3.component';

describe('Suiviprog3Component', () => {
  let component: Suiviprog3Component;
  let fixture: ComponentFixture<Suiviprog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Suiviprog3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Suiviprog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
