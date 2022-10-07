import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocfileComponent } from './docfile.component';

describe('DocfileComponent', () => {
  let component: DocfileComponent;
  let fixture: ComponentFixture<DocfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
