import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivisisiComponent } from './suivisisi.component';

describe('SuivisisiComponent', () => {
  let component: SuivisisiComponent;
  let fixture: ComponentFixture<SuivisisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivisisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivisisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
