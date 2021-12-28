import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobPickerComponent } from './dob-picker.component';

describe('DobPickerComponent', () => {
  let component: DobPickerComponent;
  let fixture: ComponentFixture<DobPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DobPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
