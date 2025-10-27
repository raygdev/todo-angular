import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox'

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() isCompleted: boolean = false;
  @Input() name: string = '';
  @Input() todoId: string = '';
}
