import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchprog2Component } from './searchprog2.component';

describe('Searchprog2Component', () => {
  let component: Searchprog2Component;
  let fixture: ComponentFixture<Searchprog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Searchprog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Searchprog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
