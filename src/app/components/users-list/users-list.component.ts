import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { USERS } from './users';

@Component({
  selector: 'app-users-list',
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  users = USERS;

  @Output() select = new EventEmitter<string>();

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
