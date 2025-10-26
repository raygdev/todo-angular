import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let url = "https://jsonplaceholder.typicode.com/todos"
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todos', () => {
    const mockTodos = [
      {id: 1, userId: 1, title: 'title 1', completed: false },
      {id: 2, userId: 2, title: 'title 2', completed: false },
      {id: 3, userId: 3, title: 'title 3', completed: false },
      {id: 4, userId: 4, title: 'title 4', completed: false }
    ]

    service.getTodos().subscribe(todos => {
      expect(todos).toEqual(mockTodos)
    })

    const req = httpMock.expectOne(url)
    expect(req.request.method).toBe('GET')
    req.flush(mockTodos)
  })
});
