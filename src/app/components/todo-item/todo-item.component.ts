import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo!: Todo;


}
