import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivroyComponent } from './activroy.component';

describe('ActivroyComponent', () => {
  let component: ActivroyComponent;
  let fixture: ComponentFixture<ActivroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
