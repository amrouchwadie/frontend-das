import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirEnMiseEnOuvreComponent } from './saisir-en-mise-en-ouvre.component';

describe('SaisirEnMiseEnOuvreComponent', () => {
  let component: SaisirEnMiseEnOuvreComponent;
  let fixture: ComponentFixture<SaisirEnMiseEnOuvreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirEnMiseEnOuvreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirEnMiseEnOuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
