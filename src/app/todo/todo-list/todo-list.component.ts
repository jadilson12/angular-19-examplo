import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Todo } from '../../api/data';
import { ButtomComponent } from '../../buttom/buttom.component';
import { ToastService } from '../../toast/toast.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [ButtomComponent, CommonModule, AsyncPipe, TodoFormComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  private _todoService = inject(TodoService);
  private _toastService = inject(ToastService);

  todos = this._todoService.getTodos();

  editarItem(item: Todo) {
    this._todoService.getOneTodos(item.id);
  }

  atualizarItem(item: Todo) {
    this._todoService.updateTodos({
      id: '1',
      name: 'delectus aut autem',
    });
  }

  deletarItem(item: Todo) {
    this._todoService.deleteTodos(item.id).pipe(
      tap(() => {
        this._toastService.showToast(
          'Item deletado com sucesso',
          'success',
          3000
        );
      })
    );
  }
}
