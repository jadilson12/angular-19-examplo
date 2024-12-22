import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {
  addTodo,
  deleteTodo,
  getTodo,
  getTodos,
  Todo,
  updateTodo,
} from '../api/data';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodos() {
    return from(getTodos());
  }

  addTodos(todo: Todo) {
    return from(addTodo(todo));
  }

  updateTodos(todo: Todo) {
    return from(updateTodo(todo));
  }

  deleteTodos(id: string) {
    return from(deleteTodo(id));
  }

  getOneTodos(id: string) {
    return from(getTodo(id));
  }
}
