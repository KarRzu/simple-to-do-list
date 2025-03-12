import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS } from '../users';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleName = 'Easy Tasks!';
}
