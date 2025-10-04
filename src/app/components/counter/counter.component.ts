import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);
  isBelowZeroEnabled = signal(true)
  increment() {
    this.counterValue.update(value => value + 1);
  }
  decrement() {
    if(!this.isBelowZeroEnabled() && this.counterValue() === 0) {
      return
    }
    this.counterValue.update(value => value - 1);
  }
  reset() {
    this.counterValue.set(0);
  }

  toggleBelowZero() {
    this.isBelowZeroEnabled.update(value => !value)
  }
} 
