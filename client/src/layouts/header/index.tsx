import MobNav from "./mobNav";
import LgNav from "./lgNav";
import MobBtn from "./mobBtn";
import NavLogo from "./navLogo";
import { useHeaderHandlers } from "../../services/handlers/headerHandlers";

const Header = () => {
  const {
    toggleMobileMenu,
    isMobileMenuOpen,
    cartItems,
    userInfo,
    toggleDropdown,
    closeDropdown,
    isOpen,
    logoutHandler,
  } = useHeaderHandlers();

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
