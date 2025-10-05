import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  http = inject(HttpClient)
  getTodosFromApi() {
    const url = "https://68e190c38943bf6bb3c47c14.mockapi.io/todos/items";
    return this.http.get<Array<Todo>>(url)
  }
  // todoItems: Array<Todo> = [
  //   {
  //     title: "Groceries",
  //     id: 0,
  //     userId: 1,
  //     completed: false
  //   },
  //   {
  //     title: "Car Wash",
  //     id: 1,
  //     userId: 1,
  //     completed: false
  //   }
  // ]
}
