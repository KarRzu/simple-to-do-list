import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { USERS } from './components/users-list/users';
import { TASKS } from './components/users-list/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleName = 'Easy Tasks!';
  users = USERS;
  tasks = TASKS;
  selectedUserId = 'u1';
  selectedTask = this.tasks[0];

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.selectedTask = this.tasks.find((task) => task.userId === id)!;
  }
}
