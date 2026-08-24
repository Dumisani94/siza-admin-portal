import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="page-head"><div><h1>Dashboard</h1><p>Overview of the SIZA platform</p></div></div>
    <div class="kpi-grid">
      <div class="kpi"><span class="kpi-icon">👥</span><div><small>Total Users</small><strong>1,245</strong><em>+12% from last month</em></div></div>
      <div class="kpi"><span class="kpi-icon">🛠</span><div><small>Total Providers</small><strong>532</strong><em>+8% from last month</em></div></div>
      <div class="kpi"><span class="kpi-icon">⏳</span><div><small>Pending Approvals</small><strong>27</strong><em>5 new today</em></div></div>
      <div class="kpi"><span class="kpi-icon">📋</span><div><small>Active Bookings</small><strong>156</strong><em>+15% from last month</em></div></div>
    </div>
    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><h3>Recent Registrations</h3><a>View all</a></div>
        <table><thead><tr><th>Name</th><th>Type</th><th>Date</th></tr></thead><tbody>
          <tr><td>John Doe</td><td>User</td><td>24 May 2026, 10:30</td></tr>
          <tr><td>Mary Smith</td><td>User</td><td>24 May 2026, 09:15</td></tr>
          <tr><td>CleanPro Services</td><td>Provider</td><td>24 May 2026, 08:45</td></tr>
          <tr><td>Bright Electrical</td><td>Provider</td><td>23 May 2026, 16:20</td></tr>
        </tbody></table>
      </div>
      <div class="panel">
        <h3>Bookings Overview</h3>
        <div class="booking-overview">
          <div class="donut"><div>156<small>Total</small></div></div>
          <div class="legend"><span>🔵 Requested 28</span><span>🟦 Accepted 41</span><span>🟡 In Progress 33</span><span>🟢 Completed 44</span><span>🔴 Cancelled 10</span></div>
        </div>
      </div>
    </div>
    <div class="summary-grid">
      <div><small>Completed Bookings</small><strong>44</strong></div>
      <div><small>Total Revenue</small><strong>R 135,540</strong></div>
      <div><small>SIZA Commission</small><strong>R 20,331</strong></div>
      <div><small>Pending Payments</small><strong>R 18,230</strong></div>
    </div>
  `
})
export class DashboardComponent {}
