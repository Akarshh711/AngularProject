import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule], // Import FormsModule for template-driven forms
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Store email and password in localStorage
      localStorage.setItem('userEmail', form.value.email);
      localStorage.setItem('userPassword', form.value.password);

      // Create a normal user object for login
      const normalUser = {
        email: form.value.email,
        password: form.value.password,
      };

      console.log('Form Data:', form.value);
      console.log('User registered:', normalUser);

      alert('Registration successful!');

      // Reset the form after submission
      form.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
