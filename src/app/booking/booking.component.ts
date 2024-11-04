import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
import { ICity } from '../cities/cities.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  cityDetails: ICity | undefined;

  constructor(
    private route: ActivatedRoute,private router:Router,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters to get city details dynamically
    this.route.params.subscribe((map) => {
      const cityName = map['name'];
      
        this.cityDetails = this.citiesService.getCityByName(cityName);
      
    });
  }

  // Back navigation
  onBack(): void {
    this.router.navigate(['/home']);
  }
}