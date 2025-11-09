import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../index';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: false,
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
