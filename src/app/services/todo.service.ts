import { Injectable } from '@angular/core';
import { Task } from '../components/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks: Task[] = [
    {
      title: 'Learn Angular',
      description: 'Study components & services',
      taskPriority: 'High',
      storyPoints: 5,
    },
    {
      title: 'Build a To-Do App',
      description: 'Use Angular and TypeScript',
      taskPriority: 'Moderate',
      storyPoints: 8,
    },
  ];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(index: number) {}

  editTask(index: number) {}
}
