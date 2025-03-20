import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { USERS } from './users';

@Component({
  selector: 'app-users-list',
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users = USERS;
}
