import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprogComponent } from './searchprog.component';

describe('SearchprogComponent', () => {
  let component: SearchprogComponent;
  let fixture: ComponentFixture<SearchprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchprogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
