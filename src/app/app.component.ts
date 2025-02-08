import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS } from '../users';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  titleName = 'Easy Tasks!';
}
