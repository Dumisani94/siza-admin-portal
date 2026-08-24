import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="page-head"><div><h1>Users</h1><p>Manage SIZA customer accounts</p></div><button class="btn primary">+ Add User</button></div>
  <div class="panel">
    <div class="filters"><input placeholder="Search name, email or phone"><select><option>All Statuses</option><option>Active</option><option>Inactive</option></select></div>
    <table><thead><tr><th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Registered On</th><th>Status</th><th>Actions</th></tr></thead><tbody>
      <tr><td>1</td><td>John Doe</td><td>john.doe@email.com</td><td>082 123 4567</td><td>24 May 2026</td><td><span class="badge success">Active</span></td><td><a routerLink="/users/1" class="icon-btn">👁</a> ✎</td></tr>
      <tr><td>2</td><td>Mary Smith</td><td>mary.smith@email.com</td><td>083 234 5678</td><td>24 May 2026</td><td><span class="badge success">Active</span></td><td><a routerLink="/users/2" class="icon-btn">👁</a> ✎</td></tr>
      <tr><td>3</td><td>Peter Johnson</td><td>peter.j@email.com</td><td>084 345 6789</td><td>23 May 2026</td><td><span class="badge success">Active</span></td><td><a routerLink="/users/3" class="icon-btn">👁</a> ✎</td></tr>
      <tr><td>4</td><td>Sipho Dlamini</td><td>sipho@email.com</td><td>082 456 7890</td><td>23 May 2026</td><td><span class="badge danger">Inactive</span></td><td><a routerLink="/users/4" class="icon-btn">👁</a> ✎</td></tr>
    </tbody></table>
    <div class="pagination">‹ <b>1</b> 2 3 … 25 ›</div>
  </div>`
})
export class UsersComponent {}
