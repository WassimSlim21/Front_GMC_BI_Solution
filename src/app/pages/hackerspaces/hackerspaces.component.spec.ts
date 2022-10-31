import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerspacesComponent } from './hackerspaces.component';

describe('HackerspacesComponent', () => {
  let component: HackerspacesComponent;
  let fixture: ComponentFixture<HackerspacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerspacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
