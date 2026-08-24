import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="breadcrumbs">Users / John Doe</div>
    <div class="profile-head panel"><div class="avatar big-avatar">JD</div><div><h2>John Doe <span class="badge success">Active</span></h2><p>john.doe@email.com · 082 123 4567</p><small>Registered 24 May 2026, 10:30</small></div></div>
    <div class="tabs"><span class="active">Profile</span><span>Bookings</span><span>Payments</span><span>Notifications</span><span>Activity</span></div>
    <div class="grid-2">
      <div class="panel"><h3>Personal Information</h3><dl><dt>Full Name</dt><dd>John Doe</dd><dt>Email</dt><dd>john.doe@email.com</dd><dt>Phone Number</dt><dd>082 123 4567</dd><dt>ID Number</dt><dd>900101 1234 089</dd><dt>Address</dt><dd>123 Main Street, Johannesburg, 2000</dd></dl></div>
      <div class="panel"><h3>Account Information</h3><dl><dt>User ID</dt><dd>USR-000125</dd><dt>Status</dt><dd><span class="badge success">Active</span></dd><dt>Registered On</dt><dd>24 May 2026, 10:30</dd><dt>Last Login</dt><dd>24 May 2026, 11:20</dd></dl><div class="actions"><button class="btn primary">Edit User</button><button class="btn danger-outline">Deactivate User</button></div></div>
    </div>
  `
})
export class UserDetailsComponent {}
