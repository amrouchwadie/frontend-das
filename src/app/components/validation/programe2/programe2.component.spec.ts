import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programe2Component } from './programe2.component';

describe('Programe2Component', () => {
  let component: Programe2Component;
  let fixture: ComponentFixture<Programe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Programe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Programe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
