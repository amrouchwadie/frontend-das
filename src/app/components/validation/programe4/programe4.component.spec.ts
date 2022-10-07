import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programe4Component } from './programe4.component';

describe('Programe4Component', () => {
  let component: Programe4Component;
  let fixture: ComponentFixture<Programe4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Programe4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Programe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
