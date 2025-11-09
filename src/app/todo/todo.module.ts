import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'
import {
  CheckboxComponent,
  TodoItemComponent,
  TodoListComponent
} from './components';
import { TodoService } from './services/todo.service';



@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, CheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  providers: [TodoService, AsyncPipe, NgIf],
  exports: [TodoListComponent]
})
export class TodoModule {}
