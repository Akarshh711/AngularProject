import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    // Initialize the form with controls and validators
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email must be valid
      message: ['', [Validators.required, Validators.minLength(10)]], // Min 10 characters
    });
  }
 
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message Sent Successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
