import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programe3Component } from './programe3.component';

describe('Programe3Component', () => {
  let component: Programe3Component;
  let fixture: ComponentFixture<Programe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Programe3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Programe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
