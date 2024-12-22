import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
       import('./todo-list/todo-list.component').then(c => c.TodoListComponent)
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
