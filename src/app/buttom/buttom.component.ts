import { Component, input } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'sucess' | 'danger' | 'warning';
@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.scss',
})
export class ButtomComponent {
  type = input<ButtonType>('primary');
}
