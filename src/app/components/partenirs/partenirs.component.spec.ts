import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenirsComponent } from './partenirs.component';

describe('PartenirsComponent', () => {
  let component: PartenirsComponent;
  let fixture: ComponentFixture<PartenirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
