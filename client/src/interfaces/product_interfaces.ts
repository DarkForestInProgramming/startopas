export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface ProductCard {
  _id: string;
  image: string;
  name: string;
  rating: number;
  price: number;
  numReviews: number;
}

export interface ProductRating {
  value: number;
  text: string;
}
