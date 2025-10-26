import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Todo } from "../components/todo-item/todo-item.component"

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com'
  items: Todo[] = [
    { id: 1, userId: 1, completed: false, title: 'failed to load todos'}
  ];

  constructor(private http: HttpClient) { }
  
  getTodos() {
    return this.http.get<Todo[]>(`${this.url}/todos`)
      .pipe(
        catchError(
          err => {
            console.log('Failed to load todos', err)
            return of(this.items)
          }
        )
      )
  }
}
