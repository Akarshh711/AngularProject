import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Retrieve registered user credentials from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if entered credentials match the stored user data
    if (this.username === storedEmail && this.password === storedPassword) {
      localStorage.setItem('userRole', 'user'); // Assume 'user' role for registered users
      this.router.navigate(['/home']);
    } else if (this.username === 'admin' && this.password === 'admin123') {
      // Check for hard-coded admin credentials
      localStorage.setItem('userRole', 'admin');
      this.router.navigate(['/home']);
    } else {
      this.loginError = true; // Show an error if credentials do not match
    }
  }
}
