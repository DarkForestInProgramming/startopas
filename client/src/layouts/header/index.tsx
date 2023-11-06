import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "../../services/interfaces/productInterfaces";
import { useState } from "react";

const Header = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const { userInfo } = useSelector((state: any) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link to="/">E-Commerce Store</Link>
          </div>
          <nav className="flex items-center">
            <Link to="/" className="hover:text-gray-400 mx-4">
              Pagrindinis
            </Link>
            <Link to="/products" className="hover:text-gray-400 mx-4">
              Prekės
            </Link>
          </nav>
          <nav className="flex space-x-4">
            <Link to="/cart" className="hover:text-gray-400">
              <FaShoppingCart className="inline-block text-xl" /> Krepšelis
              {cartItems.length > 0 && (
                <>
                  <span className="bg-red-600 text-white text-xs font-medium ml-1 px-1.5 py-0.5 rounded-full">
                    {cartItems.reduce(
                      (acc: number, current: Product) => acc + current.qty,
                      0
                    )}
                  </span>
                </>
              )}
            </Link>
            {userInfo ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  onBlur={closeDropdown}
                  className="text-white rounded-lg  inline-flex items-center "
                  type="button"
                >
                  Profilis
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="z-10 absolute  mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mano Paskyra
                        </Link>
                      </li>
                      <li>
                        <p
                          // onClick={logoutHandler}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Atsijungti
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link to="#" className="hover:text-gray-400">
                <FaUser className="inline-block text-xl" /> Prisijungti
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
