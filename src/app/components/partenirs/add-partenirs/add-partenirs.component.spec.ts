import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartenirsComponent } from './add-partenirs.component';

describe('AddPartenirsComponent', () => {
  let component: AddPartenirsComponent;
  let fixture: ComponentFixture<AddPartenirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartenirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
