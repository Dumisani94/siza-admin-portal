import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../data/user.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <div class="page-head">
      <div>
        <h1>Users</h1>
        <p>Manage SIZA customer accounts</p>
      </div>

      <button class="btn primary">
        + Add User
      </button>
    </div>

    <div class="panel">

      <div class="filters">
        <input
          type="text"
          placeholder="Search name, email or phone"
        >

        <select>
          <option>All Statuses</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <!-- Loading -->
      <div *ngIf="loading">
        Loading users...
      </div>

      <!-- Error -->
      <div *ngIf="errorMessage">
        {{ errorMessage }}
      </div>

      <!-- Users Table -->
      <table *ngIf="!loading">

        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Registered On</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <!-- No Users -->
          <tr *ngIf="users.length === 0">
            <td colspan="7">
              No users found
            </td>
          </tr>

          <!-- Users -->
          <tr *ngFor="let user of users; let i = index">

            <td>
              {{ i + 1 }}
            </td>

            <td>
              {{ user.firstName }} {{ user.lastName }}
            </td>

            <td>
              {{ user.email }}
            </td>

            <td>
              {{ user.phoneNumber }}
            </td>

            <td>
              {{ user.createdAt | date:'dd MMM yyyy' }}
            </td>

            <td>
              <span class="badge success">
                Active
              </span>
            </td>

            <td>

              <a
                [routerLink]="['/users', user.id]"
                class="icon-btn"
                title="View User">
                👁
              </a>

              <span
                class="icon-btn"
                title="Edit User">
                ✎
              </span>

            </td>

          </tr>

        </tbody>

      </table>

      <div
        class="pagination"
        *ngIf="!loading && users.length > 0">

        Total: <b>{{ users.length }}</b>

      </div>

    </div>
  `
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  loading = false;

  errorMessage = '';

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {

    this.loading = true;
    this.errorMessage = '';

    this.userService
      .getAllUsers()
      .subscribe({

        next: (users) => {

          this.users = users;

          this.loading = false;

          console.log(
            'Users loaded successfully',
            users
          );

        },

        error: (error) => {

          console.error(
            'Failed to load users',
            error
          );

          this.errorMessage =
            'Failed to load users. Please try again.';

          this.loading = false;

        }

      });

  }

}