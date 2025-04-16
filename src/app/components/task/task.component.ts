import { Component, inject, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from './task.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from '../new-task/new-task.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgFor,
    NewTaskComponent,
    ButtonComponent,
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) summary!: string;
  @Input({ required: true }) dueDate!: string;
  isAddingTask: boolean = false;

  tasks: Task[] = [];
  todoService = inject(TodoService);

  ngOnInit() {
    this.todoService.getTasks().subscribe((data) => {
      console.log('Loaded tasks:', data);
      this.tasks = data;
    });
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onTaskAdded(newTask: Task) {
    this.tasks.push(newTask);
    this.isAddingTask = false;
    console.log('New task added:', newTask);
  }

  removeTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.removeTask(id).subscribe(() => {
        this.tasks.filter((task) => task.id !== id);
        console.log(`Task with id ${id} was removed`);
      });
    }
  }
}
