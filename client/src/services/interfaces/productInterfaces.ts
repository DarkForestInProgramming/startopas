export interface ProductInterface {
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
  qty: number;
}

export interface ProductCardInterface {
  _id: string;
  image: string;
  name: string;
  rating: number;
  price: number;
  numReviews: number;
}

export interface ProductRatingInterface {
  value: number;
  text: string;
}
