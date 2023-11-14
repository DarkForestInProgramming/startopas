import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { HeaderInterface } from "../../services/interfaces/headerInterfaces";

const LgNav: React.FC<HeaderInterface> = ({
  cartItems,
  userInfo,
  toggleDropdown,
  isOpen,
  logoutHandler,
}) => {
  return (
    <div
      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-light lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <Link
            to="/"
            className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 lg:p-0"
          >
            Pagrindinis
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-gray-400">
            <FaShoppingCart className="inline-block text-xl" /> Krepšelis
            {cartItems.length > 0 && (
              <>
                <span className="bg-red-600 text-white text-xs font-medium ml-1 px-1.5  rounded-full">
                  {cartItems.reduce(
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
          {userInfo ? (
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="inline-flex items-center cursor-pointer"
              >
                <FaUser className="inline-block text-lg mr-1" />
                {userInfo.name}
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

              {isOpen && (
                <div className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700 ">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Mano Paskyra
                      </Link>
                    </li>
                    {userInfo && userInfo.isAdmin && (
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
                        onClick={logoutHandler}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer "
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
