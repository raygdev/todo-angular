import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo, TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let mockData: Todo;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponent]
    })
    .compileComponents();

    mockData = { id: 1, userId: 1, completed: true, title: 'title' }

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = mockData
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todo data', () => {
    expect(component.todo).toBe(mockData)
  })
});
