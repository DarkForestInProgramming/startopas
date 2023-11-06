import { Product } from "./productInterfaces";

export interface Header {
  isMobileMenuOpen: boolean;
  cartItems: Product[];
  userInfo: any;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  isOpen: boolean;
  logoutHandler: () => void;
}
