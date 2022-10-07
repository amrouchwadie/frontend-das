import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydossierComponent } from './displaydossier.component';

describe('DisplaydossierComponent', () => {
  let component: DisplaydossierComponent;
  let fixture: ComponentFixture<DisplaydossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydossierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
