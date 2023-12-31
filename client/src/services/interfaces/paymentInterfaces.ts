export interface PaymentInterface {
  submitHandler: (e: React.FormEvent) => void;
  setPaymentMethod: Function;
}

export interface ShippingInterface {
  submitHandler: (e: React.FormEvent) => void;
  address: string;
  setAddress: Function;
  city: string;
  setCity: Function;
  postalCode: string;
  setPostalCode: Function;
  country: string;
  setCountry: Function;
}
