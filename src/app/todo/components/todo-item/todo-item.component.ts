import { Component, Input } from '@angular/core';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
}
