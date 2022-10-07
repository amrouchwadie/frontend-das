import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultvisitComponent } from './consultvisit.component';

describe('ConsultvisitComponent', () => {
  let component: ConsultvisitComponent;
  let fixture: ComponentFixture<ConsultvisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultvisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
