import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICity } from './cities.model';
import { FormsModule } from '@angular/forms';
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';
import { CitiesService } from './cities.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, FormsModule, TravelRatingComponent, RouterLink],
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit, OnChanges, OnDestroy {

  _searchTerm: string = '';
  _selectedType: string = 'All';
  filteredCities: ICity[] = [];
  cities: ICity[] = [];
  selectedCity: ICity | null = null;
  editMode: boolean = false;
  isAddModalOpen: boolean = false;
  newCity: ICity = {
    id: 0,
    name: '',
    description: '',
    type: '',
    price: 0,
    ratings: 0,
    imageUrl: '',
    isPopular: false
  };

  constructor(private citiesService: CitiesService) {
    console.log('CitiesComponent Constructor');
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filterCities();
  }

  get selectedType(): string {
    return this._selectedType;
  }

  set selectedType(value: string) {
    this._selectedType = value;
    this.filterCities();
  }

  ngOnInit(): void {
    console.log('CitiesComponent Initialized');
    this.cities = this.citiesService.getCities();
    this.filterCities();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CitiesComponent Changes Detected:', changes);
  }

  ngOnDestroy(): void {
    console.log('CitiesComponent Destroyed');
  }

  filterCities(): void {
    this.filteredCities = this.cities
      .filter(city => city.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .filter(city => this.selectedType === 'All' || city.type === this.selectedType);
  }

  openCityModal(city: ICity) {
    this.selectedCity = { ...city };
    this.editMode = false;
  }

  openEditModal(city: ICity) {
    this.selectedCity = { ...city };
    this.editMode = true;
  }

  closeModal() {
    this.selectedCity = null;
    this.editMode = false;
    this.isAddModalOpen = false;
  }

  saveCityChanges() {
    if (this.selectedCity) {
      const index = this.cities.findIndex(city => city.id === this.selectedCity?.id);
      if (index > -1) {
        this.cities[index] = { ...this.selectedCity };
        this.filterCities();
        this.closeModal();
      }
    }
  }

  deleteCity(cityId: number) {
    this.cities = this.cities.filter(city => city.id !== cityId);
    this.filterCities();
  }

  openAddModal() {
    this.isAddModalOpen = true;
  }

  addNewCity() {
    if (this.newCity.name && this.newCity.imageUrl) {
      this.newCity.id = this.cities.length + 1;
      this.cities.push({ ...this.newCity });
      this.filterCities();
      this.closeModal();
    } else {
      alert('Please fill in all required fields');
    }
  }
}
