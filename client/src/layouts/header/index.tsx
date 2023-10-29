import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "../../interfaces/productInterfaces";

const Header = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
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
            <Link to="#" className="hover:text-gray-400">
              <FaUser className="inline-block text-xl" /> Profilis
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
