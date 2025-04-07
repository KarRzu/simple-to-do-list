import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from '../task/task.model';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() taskAdded = new EventEmitter<Task>();

  todoService = inject(TodoService);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
  });

  enteredTitle = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const task = this.taskForm.value as Task;

    this.todoService.addTask(task).subscribe((addedTask) => {
      if (addedTask) {
        this.taskAdded.emit(addedTask);
        this.taskForm.reset();
        console.log('Task added:', addedTask);
      } else {
        console.error('Failed to add task');
      }
    });
  }
}
