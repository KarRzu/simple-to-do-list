import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from './task.model';
import { NgFor } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-task',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  todoService = inject(TodoService);
  tasks: Task[] = [];

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    taskPriority: new FormControl('High', Validators.required),
    storyPoints: new FormControl('1', Validators.required),
  });

  ngOnInit(): void {
    this.loadTasks();
  }

  //pobieramy liste z API

  loadTasks() {
    this.todoService
      .getTasks()
      .pipe(
        catchError((err) => {
          console.error('Błąd pobierania zadań:', err);
          return of([]);
        })
      )
      .subscribe((todos) => {
        this.tasks = todos;
      });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: 0,
        title: this.taskForm.value.title ?? '',
        description: this.taskForm.value.description ?? '',
        taskPriority:
          (this.taskForm.value.taskPriority as
            | 'High'
            | 'Moderate'
            | 'Low'
            | 'Critical') ?? 'Low',
        storyPoints: Number(this.taskForm.value.storyPoints) || 1,
      };

      this.todoService.addTask(newTask).subscribe(() => {
        this.taskForm.reset();
        this.loadTasks();
      });
    } else {
      alert('The form is incorrect !');
    }
  }

  onDelete(taskId: number) {
    this.todoService.removeTask(taskId).subscribe(() => {
      this.loadTasks();
    });
  }
}
