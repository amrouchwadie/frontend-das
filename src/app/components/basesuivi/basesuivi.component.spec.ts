import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesuiviComponent } from './basesuivi.component';

describe('BasesuiviComponent', () => {
  let component: BasesuiviComponent;
  let fixture: ComponentFixture<BasesuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
