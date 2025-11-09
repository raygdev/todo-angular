import { Component, Input } from '@angular/core';


@Component({
  selector: 'checkbox',
  standalone: false,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() isCompleted: boolean = false;
  @Input() name: string = '';
  @Input() todoId: string = '';
}
