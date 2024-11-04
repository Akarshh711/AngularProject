import { Injectable } from "@angular/core";
import { ICity} from "./cities.model";
 
@Injectable({
 
    providedIn:'root'
})
 
export class CitiesService
{
   private cities: ICity[] = [
    { 
      id:1,
      name: 'Paris',
      imageUrl: 'assets/images/paris.jpg',
      description: 'The capital of France, known for its art, fashion, and culture.',
      isPopular: true,
      price: 2000,
      ratings: 4.2,
      type: 'Cultural/Heritage'
    },
    {
      id:2,
      name: 'New York',
      imageUrl: 'assets/images/newyork.jpg',
      description: 'The largest city in the USA, known for its skyscrapers and vibrant lifestyle.',
      isPopular: true,
      price: 5000,
      ratings: 3.5,
      type: 'Family Travel'
    },
    {
      id:3,
      name: 'Tokyo',
      imageUrl: 'assets/images/japan.jpg',
      description: 'The bustling capital of Japan, famous for technology and food.',
      isPopular: true,
      price: 1500,
      ratings: 4,
      type: 'Cultural/Heritage'
    },
    {
      id:4,
      name: 'Sydney',
      imageUrl: 'assets/images/sydney.jpg',
      description: 'The beautiful coastal city in Australia, known for the Sydney Opera House.',
      isPopular: true,
      price: 1000,
      ratings: 3.9,
      type: 'Adventure/Hiking'
    },
    {
      id:5,
      name: 'London',
      imageUrl: 'assets/images/London.jpg',
      description: 'The capital of the United Kingdom, famous for its history and landmarks.',
      isPopular: false,
      price: 2200,
      ratings: 4.7,
      type: 'Cultural/Heritage'
    },
    {
      id:6,
      name: 'Rome',
      imageUrl: 'assets/images/Rome.jpg',
      description: 'The capital of Italy, known for its ancient ruins and vibrant culture.',
      isPopular: true,
      price: 2000,
      ratings: 4.5,
      type: 'Cultural/Heritage' 
    }
  ];
 
  // Method to get all cities
  getCities(): ICity[] {
    return this.cities;
  }

  // Method to get a city by name
  getCityByName(name: string): ICity | undefined {
    return this.cities.find(city => city.name === name);
  }
  addCity(newCity: ICity): void {
    this.cities.push(newCity);
  }
}