import { UserInterface } from "./userInterfaces";

export interface OrderInterface {
  _id: string;
  createdAt: string;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  deliveredAt: string;
  paidAt: string;
  user: UserInterface;
}
