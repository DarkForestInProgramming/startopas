import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Product } from "../../services/interfaces/productInterfaces";
import { Header } from "../../services/interfaces/headerInterfaces";

const LgNav: React.FC<Header> = (props) => {
  return (
    <div
      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <Link
            to="/"
            className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-gray-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
          >
            Pagrindinis
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-gray-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
          >
            Prekės
          </Link>
        </li>

        <li>
          <Link to="/cart" className="hover:text-gray-400">
            <FaShoppingCart className="inline-block text-xl" /> Krepšelis
            {props.cartItems.length > 0 && (
              <>
                <span className="bg-red-600 text-white text-xs font-medium ml-1 px-1.5  rounded-full">
                  {props.cartItems.reduce(
                    (acc: number, current: Product) => acc + current.qty,
                    0
                  )}
                </span>
              </>
            )}
          </Link>
        </li>
        <li>
          {props.userInfo ? (
            <div className="relative">
              <button
                onClick={props.toggleDropdown}
                onBlur={props.closeDropdown}
                className="text-white rounded-lg  inline-flex items-center "
                type="button"
              >
                Profilis
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
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

              {props.isOpen && (
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
                        onClick={props.logoutHandler}
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
            <Link to="/login" className="hover:text-gray-400">
              <FaUser className="inline-block text-xl" /> Prisijungti
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LgNav;
