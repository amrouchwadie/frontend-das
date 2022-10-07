import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suiviprog4Component } from './suiviprog4.component';

describe('Suiviprog4Component', () => {
  let component: Suiviprog4Component;
  let fixture: ComponentFixture<Suiviprog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Suiviprog4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Suiviprog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
