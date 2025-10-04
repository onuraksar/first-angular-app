import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log('runs when the component is initiated');
    console.log(this.todoService.todoItems);
    this.todoItems.set((this.todoService.todoItems))

  }

}
