import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvisitComponent } from './editvisit.component';

describe('EditvisitComponent', () => {
  let component: EditvisitComponent;
  let fixture: ComponentFixture<EditvisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
