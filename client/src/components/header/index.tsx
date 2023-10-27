import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
