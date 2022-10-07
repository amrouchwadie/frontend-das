import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdhComponent } from './pdh.component';

describe('PdhComponent', () => {
  let component: PdhComponent;
  let fixture: ComponentFixture<PdhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
