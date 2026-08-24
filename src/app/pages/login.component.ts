import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="login-page">
    <div class="login-card">
      <div class="login-logo"><span class="brand-mark big">S</span><span>SIZA</span></div>
      <h1>Welcome Back</h1>
      <p>Sign in to your SIZA admin account</p>
      <label>Email address</label>
      <input value="admin@siza.co.za" />
      <label>Password</label>
      <input type="password" value="password123" />
      <a class="forgot">Forgot password?</a>
      <a routerLink="/dashboard" class="btn primary full">Sign In</a>
      <small>© 2026 SIZA. All rights reserved.</small>
    </div>
  </div>`
})
export class LoginComponent {}
