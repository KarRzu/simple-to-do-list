import { inject, Injectable } from '@angular/core';
import { Task } from '../components/task/task.model';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Array<Task>>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error while fetching tasks:', error);
        return of([]);
      })
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      catchError((error) => {
        console.error('Error while add tasks:', error);
        return of(null as unknown as Task);
      })
    );
  }

  removeTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error while delete tasks:', error);
        return of();
      })
    );
  }

  editTask(id: number) {}
}
