import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699870799/Startopas/startopas_logo.png"
        className="mr-3 h-6 sm:h-9"
        alt="Startopas"
      />
      <span className="self-center text-xl font-mono whitespace-nowrap">
        Startopas
      </span>
    </Link>
  );
};

export default NavLogo;
