import { CommonModule } from '@angular/common';
import { Component, effect, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  label = input<string>('Default Label');
  type = input<string>('text');
  placeholder = input<string>('Enter text...');
  inputId = input<string>('custom-input');
  value = model('');
  clear = input<boolean>(false);

  constructor() {
    effect(() => {
      if (this.clear()) {
        this.clearValue();
      }
    });
  }

  clearValue() {
    this.value.set('');
  }

  onInput(event: Event) {
    const value = event.target as HTMLInputElement;
    console.log(value);
  }
}
