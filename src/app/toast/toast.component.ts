import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from './toast.service';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ToastComponent {
  private toastService = inject(ToastService);
  toasts = this.toastService.toasts;

  removeToast(id: number) {
    this.toastService['removeToast'](id);
  }
}
