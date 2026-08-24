import { Component } from '@angular/core';
@Component({ standalone: true, template: `
<div class="page-head"><div><h1>Notifications</h1><p>System and administrator alerts</p></div><button class="btn primary">+ Send Notification</button></div>
<div class="panel notification-list"><div class="notification unread"><b>New provider registration</b><p>CleanPro Services submitted verification documents.</p><small>10 minutes ago</small></div><div class="notification unread"><b>Booking requires attention</b><p>Booking BK-000122 was cancelled by the customer.</p><small>35 minutes ago</small></div><div class="notification"><b>Payment completed</b><p>Transaction TXN-000125 was successfully processed.</p><small>1 hour ago</small></div></div>`})
export class NotificationsComponent {}
