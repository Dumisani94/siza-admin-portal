import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand"><span class="brand-mark">S</span><span>SIZA</span></div>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active">▦ Dashboard</a>
          <a routerLink="/users" routerLinkActive="active">👤 Users</a>
          <a routerLink="/providers" routerLinkActive="active">🛠 Providers</a>
          <a routerLink="/categories" routerLinkActive="active">▤ Categories</a>
          <a routerLink="/bookings" routerLinkActive="active">▣ Bookings</a>
          <a routerLink="/payments" routerLinkActive="active">💳 Payments</a>
          <a routerLink="/notifications" routerLinkActive="active">🔔 Notifications</a>
          <a routerLink="/reports" routerLinkActive="active">📊 Reports</a>
          <a routerLink="/audit-logs" routerLinkActive="active">🕘 Audit Logs</a>
          <a routerLink="/administration" routerLinkActive="active">⚙ Administration</a>
        </nav>
      </aside>
      <main class="main-area">
        <header class="topbar">
          <div class="menu-icon">☰</div>
          <div class="top-actions"><span>🔔</span><span class="avatar">AU</span><span>Admin User</span></div>
        </header>
        <section class="content"><router-outlet /></section>
      </main>
    </div>
  `
})
export class LayoutComponent {}
