import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreuComponent } from './greu.component';

describe('GreuComponent', () => {
  let component: GreuComponent;
  let fixture: ComponentFixture<GreuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
