import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfileComponent } from './displayfile.component';

describe('DisplayfileComponent', () => {
  let component: DisplayfileComponent;
  let fixture: ComponentFixture<DisplayfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
