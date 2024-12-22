import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Todo } from '../../api/data';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, AsyncPipe, TodoFormComponent],
  providers: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  private _todoService = inject(TodoService);

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

  deletarItem(id: string) {
    this._todoService.deleteTodos(id);
  }
}
