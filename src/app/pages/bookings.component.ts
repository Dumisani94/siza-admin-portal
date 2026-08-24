import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ standalone: true, imports: [RouterLink], template: `
<div class="page-head"><div><h1>Bookings</h1><p>Track service requests and bookings</p></div><button class="btn">⇩ Export</button></div>
<div class="panel"><div class="filters"><input placeholder="Search booking reference, user or provider"><select><option>Status: All</option></select><select><option>Payment: All</option></select><input type="date"></div>
<table><thead><tr><th>Booking Ref</th><th>Customer</th><th>Provider</th><th>Service</th><th>Date</th><th>Status</th><th>Payment</th><th>Actions</th></tr></thead><tbody>
<tr><td>BK-000125</td><td>John Doe</td><td>CleanPro Services</td><td>Cleaning</td><td>24 May 2026</td><td><span class="badge success">Accepted</span></td><td><span class="badge success">Paid</span></td><td><a routerLink="/bookings/1">👁</a></td></tr>
<tr><td>BK-000134</td><td>Mary Smith</td><td>Bright Electrical</td><td>Electrical</td><td>24 May 2026</td><td><span class="badge info">In Progress</span></td><td><span class="badge success">Paid</span></td><td><a routerLink="/bookings/2">👁</a></td></tr>
<tr><td>BK-000123</td><td>Peter Johnson</td><td>Green Gardens</td><td>Gardening</td><td>24 May 2026</td><td><span class="badge success">Completed</span></td><td><span class="badge success">Paid</span></td><td><a routerLink="/bookings/3">👁</a></td></tr>
<tr><td>BK-000122</td><td>Sipho Dlamini</td><td>Quick Plumbing</td><td>Plumbing</td><td>23 May 2026</td><td><span class="badge danger">Cancelled</span></td><td><span class="badge warning">Pending</span></td><td><a routerLink="/bookings/4">👁</a></td></tr>
</tbody></table></div>`})
export class BookingsComponent {}
