import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        className="mr-3 h-6 sm:h-9"
        src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699953086/Startopas/app_logo.webp"
        loading="lazy"
        alt="Logotipas"
      />
      <span className="self-center text-xl font-sans whitespace-nowrap">
        Startopas
      </span>
    </Link>
  );
};

export default NavLogo;
