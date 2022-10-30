import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOwnersComponent } from './deals-owners.component';

describe('DealsOwnersComponent', () => {
  let component: DealsOwnersComponent;
  let fixture: ComponentFixture<DealsOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsOwnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
