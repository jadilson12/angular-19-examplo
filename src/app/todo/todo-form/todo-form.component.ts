import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../toast/toast.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  private _totoService = inject(TodoService);
  private _toastService = inject(ToastService);
  name = model('');

  adicionarItem() {
    this._totoService.addTodos({
      id: '',
      name: this.name(),
    });
    this.name.set('');
    this._toastService.showToast(
      'Item adicionado com sucesso',
      'success',
      3000
    );
  }
}
