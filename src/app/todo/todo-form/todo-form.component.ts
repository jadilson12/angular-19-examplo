import { Component, inject } from '@angular/core';
import { ButtomComponent } from '../../buttom/buttom.component';
import { InputComponent } from '../../input/input.component';
import { ToastService } from '../../toast/toast.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  imports: [ButtomComponent, InputComponent],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  private _totoService = inject(TodoService);
  private _toastService = inject(ToastService);
  name = '';
  clear = false;

  adicionarItem() {
    this._totoService.addTodos({
      id: '',
      name: this.name,
    });

    this.clear = true;

    this._toastService.showToast(
      'Item adicionado com sucesso',
      'success',
      3000
    );
  }
}
