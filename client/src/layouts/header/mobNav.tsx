import { Link } from "react-router-dom";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { HeaderInterface } from "../../services/interfaces/headerInterfaces";

const MobNav: React.FC<HeaderInterface> = (props) => {
  return (
    <div
      className={`mt-4 mb-4 lg:hidden w-full ${
        props.isMobileMenuOpen ? "" : "hidden"
      }`}
      id="mobile-menu-2"
    >
      <ul className="flex flex-col font-mono lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <Link
            to="/"
            className="block py-2 pr-4 pl-3 border-b border-gray-800 hover:bg-gray-50 hover:text-gray-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
          >
            Pagrindinis
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pr-4 pl-3 border-b border-gray-800 hover:bg-gray-50 hover:text-gray-900"
            to="/cart"
          >
            <FaShoppingCart className="inline-block text-xl" /> Krepšelis
            {props.cartItems.length > 0 && (
              <>
                <span className="bg-red-600 text-white text-xs font-medium ml-1 px-1.5  rounded-full">
                  {props.cartItems.reduce(
                    (acc: number, current: ProductInterface) =>
                      acc + current.qty,
                    0
                  )}
                </span>
              </>
            )}
          </Link>
        </li>
        <li>
          {props.userInfo ? (
            <div className="relative block py-2 pr-4 pl-3">
              <div
                onClick={props.toggleDropdown}
                className="inline-flex items-center cursor-pointer"
              >
                <FaUser className="inline-block text-xl" />
                &nbsp;{props.userInfo.name}
                <svg
                  className="w-2.5 h-2.5 ml-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>

              {props.isOpen && (
                <div className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Mano Paskyra
                      </Link>
                    </li>
                    {props.userInfo && props.userInfo.isAdmin && (
                      <li>
                        <Link
                          to="/admin/orderList"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Užsakymai
                        </Link>
                      </li>
                    )}
                    <li>
                      <p
                        onClick={props.logoutHandler}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Atsijungti
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="block py-2 pr-4 pl-3 border-b border-gray-800 hover:bg-gray-50 hover:text-gray-900"
              to="/login"
            >
              <FaUser className="inline-block text-xl" /> Prisijungti
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobNav;
