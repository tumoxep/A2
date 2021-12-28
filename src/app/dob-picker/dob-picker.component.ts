import * as dayjs from 'dayjs';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dob-picker',
  templateUrl: './dob-picker.component.html',
  styleUrls: ['./dob-picker.component.css']
})
export class DobPickerComponent {
  @Output() updateDob = new EventEmitter();
  dobForm = new FormGroup({
    day: new FormControl(25),
    month: new FormControl(11),
    year: new FormControl(1991),
  });

  constructor() {}

  onSubmit() {
    const today = dayjs();
    const dob = dayjs(`${this.dobForm.get('year')!.value}-${this.dobForm.get('month')!.value}-${this.dobForm.get('day')!.value}`, 'YYYY-MM-DD', true);
    const dur = dayjs.duration(today.diff(dob)).asDays();
    this.updateDob.emit(dur);
  }
}
