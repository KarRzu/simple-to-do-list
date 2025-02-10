import { inject, Injectable } from '@angular/core';
import { Task } from '../components/task/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  tasks: Array<Task> = [
    {
      title: 'grocerries',
      description: 'ffff',
      taskPriority: 'High',
      storyPoints: 1,
    },
    {
      title: 'fff',
      description: 'fddss',
      taskPriority: 'High',
      storyPoints: 1,
    },
  ];

  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get<Array<Task>>(url);
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(index: number) {}

  editTask(index: number) {}
}
