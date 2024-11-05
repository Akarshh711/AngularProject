import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
import { ICity } from '../cities/cities.model';
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule,TravelRatingComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  cityDetails: ICity | undefined;

  reviews = [
    { name: 'Alice', review: 'Amazing experience, would highly recommend!', stars: 5 },
    { name: 'Bob', review: 'Great value for the price. Stunning views!', stars: 4 },
    { name: 'Charlie', review: 'Good, but could be better with more amenities.', stars: 3 },
    { name: 'Dana', review: 'The location was perfect for sightseeing!', stars: 5 },
    { name: 'Eve', review: 'Average stay, service was okay.', stars: 3 },
    { name: 'Frank', review: 'Absolutely loved it! The food was great.', stars: 4 },
    { name: 'Grace', review: 'An unforgettable experience. Perfect for families.', stars: 5 },
    { name: 'Hank', review: 'Decent for the price. Could use some updates.', stars: 3 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters to get city details dynamically
    this.route.params.subscribe((params) => {
      const cityName = params['name'];
      this.cityDetails = this.citiesService.getCityByName(cityName);
    });
  }

  // Back navigation
  onBack(): void {
    // Logic to navigate back to the previous page
    window.history.back();
  }


  // Function to randomly select reviews from the sample array
  getRandomReviews(): any[] {
    const shuffled = this.reviews.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Display 3 random reviews for each visit
  }
}
