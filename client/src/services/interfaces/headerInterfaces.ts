import { ProductInterface } from "./productInterfaces";

export interface HeaderInterface {
  isMobileMenuOpen: boolean;
  cartItems: ProductInterface[];
  userInfo: any;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  isOpen: boolean;
  logoutHandler: () => void;
}

export interface MobHeaderInterface {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}
