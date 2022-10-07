import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituseComponent } from './edituse.component';

describe('EdituseComponent', () => {
  let component: EdituseComponent;
  let fixture: ComponentFixture<EdituseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
