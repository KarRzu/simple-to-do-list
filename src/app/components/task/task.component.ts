import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from './task.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  tasks: Task[] = [];

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    taskPriority: new FormControl('High', Validators.required),
    storyPoints: new FormControl('1', Validators.required),
  });

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
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

      this.todoService.addTask(newTask);

      this.taskForm.reset();
    } else {
      alert('The form is incorrect !');
    }
  }
}
