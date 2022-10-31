import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredectionsComponent } from './predections.component';

describe('PredectionsComponent', () => {
  let component: PredectionsComponent;
  let fixture: ComponentFixture<PredectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
