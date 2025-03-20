import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from './task.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { catchError, of } from 'rxjs';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgFor, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) summary!: string;
  @Input({ required: true }) dueDate!: string;
  isAddingTask: boolean = false;

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
