import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  todoItemText = signal<string>("");

  ngOnInit(): void {
    console.log('runs when the component is initiated');
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log(err)
        throw err;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos)
    } )


    // console.log(this.todoService.todoItems);
    // this.todoItems.set((this.todoService.todoItems))
  }

  onChange(event: any) {
    console.log("event:", event?.target?.value)
    this.todoItemText.update(text => text = event?.target?.value)
  }
  onSubmit() {
    // todo: send post request here and after that call get request again
    console.log('submitting!')
    

    this.todoItemText.set("")
  }

}
