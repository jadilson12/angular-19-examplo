import { Injectable, Signal, signal } from '@angular/core';
import { Toast } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSignal = signal<Toast[]>([]);

  get toasts(): Signal<Toast[]> {
    return this.toastsSignal;
  }

  showToast(
    message: string,
    type: 'success' | 'error' | 'info',
    duration = 3000
  ): void {
    const id = Date.now();
    const toast = { id, message, type, duration };

    this.toastsSignal.update((current) => [...current, toast]);

    setTimeout(() => {
      this.removeToast(id);
    }, duration);
  }

  private removeToast(id: number): void {
    this.toastsSignal.update((current) =>
      current.filter((toast) => toast.id !== id)
    );
  }
}
