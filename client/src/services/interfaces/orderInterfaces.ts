import { UserInterface } from "./userInterfaces";

export interface OrderInterface {
  _id: string;
  createdAt: string;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  deliveredAt: string;
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  paidAt: string;
  user: UserInterface;
}

export interface CartInterface {
  _id: string;
  name: string;
  image: string;
  category: string;
  countInStock: number;
  price: number;
  qty: number;
  taxPrice?: number;
  shippingPrice?: number;
  totalPrice?: number;
  cartItems?: {
    length: number;
  };
  addToCartHandler: (product: any, qty: number) => void;
  removeFromCartHandler: (id: string) => void;
}
