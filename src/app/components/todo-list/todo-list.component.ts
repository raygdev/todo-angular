import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common'
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent, Todo } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, AsyncPipe, JsonPipe, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  todos$!: Observable<Todo[]>
  constructor(private todoService: TodoService){}

  ngOnInit(): void {
     this.todos$ = this.todoService.getTodos()  
  }
}
