import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartenirsComponent } from './edit-partenirs.component';

describe('EditPartenirsComponent', () => {
  let component: EditPartenirsComponent;
  let fixture: ComponentFixture<EditPartenirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPartenirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
