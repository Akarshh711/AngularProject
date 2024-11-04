import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core'; // Correct import
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon


@Component({
  selector: 'app-travel-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './travel-rating.component.html',
  styleUrls: ['./travel-rating.component.css'] // Correct spelling to "styleUrls"
})
export class TravelRatingComponent {
  faStar = faStar; // FontAwesome star icon
  @Input() rating!: number; // Input property to receive rating from parent
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // Output for event emission
  
 
  starWidth: number=0;

  ngOnChanges(): void {
    
    // Calculate starWidth based on the rating
    this.starWidth = (this.rating * 90) / 5; // 90px is the total width for a full rating
  }

  onClick(): void {
    // Emit the rating value as a string message
    this.ratingClicked.emit(`The rating is ${this.rating}`);
  }
}
