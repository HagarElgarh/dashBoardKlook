import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdetailsComponent } from './dashdetails.component';

describe('DashdetailsComponent', () => {
  let component: DashdetailsComponent;
  let fixture: ComponentFixture<DashdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
