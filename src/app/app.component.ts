import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BookingComponent } from "./booking/booking.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { CitiesComponent } from './cities/cities.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HomeComponent, BookingComponent, AboutUsComponent, ContactUsComponent,CitiesComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myTravelApp';
  isLoggedIn(): boolean {
    return localStorage.getItem('useremail') !== null;
  }

  getUsername(): string | null {
    return localStorage.getItem('useremail');
  }
}
