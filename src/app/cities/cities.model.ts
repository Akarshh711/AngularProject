// src/app/cities/city.model.ts

export interface ICity {
    id:number,
    name: string;
    imageUrl: string;
    description: string;
    isPopular: boolean;
    price: number;     
    ratings: number;
    type: string;
  }
  