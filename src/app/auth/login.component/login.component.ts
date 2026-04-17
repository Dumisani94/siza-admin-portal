import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    console.log('clicked');
    this.router.navigate(['/home']);
  }
}
