import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCollectionComponent } from './tour-collection.component';

describe('TourCollectionComponent', () => {
  let component: TourCollectionComponent;
  let fixture: ComponentFixture<TourCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
