import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Component } from '@angular/core';

dayjs.extend(duration);
dayjs.extend(customParseFormat);

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  squares: any[] = new Array(dayjs.duration(85, 'years').asDays());
  showPicker = true;
  popperInstance = null;
  tooltipText = '';

  constructor() {}

  onUpdateDob(dur: any) {
    this.squares = this.squares.fill(true, dur);
    this.showPicker = false;
  }

  onEditClick() {
    this.showPicker = true;
  }
}
