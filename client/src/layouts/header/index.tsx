import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../services/slices/usersApiSlice";
import { logout } from "../../services/slices/authSlice";
import MobNav from "./mobNav";
import LgNav from "./lgNav";
import MobBtn from "./mobBtn";
import NavLogo from "./navLogo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { cartItems } = useSelector((state: any) => state.cart);
  const { userInfo } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(logout({}));
      navigate("/login");
    } catch (error) {}
  };

  return (
    <header>
      <nav className="bg-gray-900 text-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLogo />
          <MobBtn
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <MobNav
            isMobileMenuOpen={isMobileMenuOpen}
            cartItems={cartItems}
            userInfo={userInfo}
            toggleDropdown={toggleDropdown}
            closeDropdown={closeDropdown}
            isOpen={isOpen}
            logoutHandler={logoutHandler}
          />
          <LgNav
            isMobileMenuOpen={isMobileMenuOpen}
            cartItems={cartItems}
            userInfo={userInfo}
            toggleDropdown={toggleDropdown}
            closeDropdown={closeDropdown}
            isOpen={isOpen}
            logoutHandler={logoutHandler}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
