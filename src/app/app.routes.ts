import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { LayoutComponent } from './pages/layout.component';
import { DashboardComponent } from './pages/dashboard.component';
import { UsersComponent } from './pages/users.component';
import { UserDetailsComponent } from './pages/user-details.component';
import { ProvidersComponent } from './pages/providers.component';
import { ProviderDetailsComponent } from './pages/provider-details.component';
import { ProviderApprovalComponent } from './pages/provider-approval.component';
import { CategoriesComponent } from './pages/categories.component';
import { BookingsComponent } from './pages/bookings.component';
import { BookingDetailsComponent } from './pages/booking-details.component';
import { PaymentsComponent } from './pages/payments.component';
import { NotificationsComponent } from './pages/notifications.component';
import { ReportsComponent } from './pages/reports.component';
import { AuditLogsComponent } from './pages/audit-logs.component';
import { AdminUsersComponent } from './pages/admin-users.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: 'providers', component: ProvidersComponent },
      { path: 'providers/:id', component: ProviderDetailsComponent },
      { path: 'providers/:id/approval', component: ProviderApprovalComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'bookings/:id', component: BookingDetailsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'audit-logs', component: AuditLogsComponent },
      { path: 'administration', component: AdminUsersComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
