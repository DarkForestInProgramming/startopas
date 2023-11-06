import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Startopas"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap">
        Startopas
      </span>
    </Link>
  );
};

export default NavLogo;
