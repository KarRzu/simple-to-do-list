import { inject, Injectable } from '@angular/core';
import { Task } from '../components/task/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/tasks';

  getTasks() {
    return this.http.get<Array<Task>>(this.apiUrl);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  removeTask(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editTask(id: number) {}
}
