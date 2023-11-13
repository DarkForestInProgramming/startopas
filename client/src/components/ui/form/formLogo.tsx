import { Link } from "react-router-dom";

const FormLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-8 h-8 mr-2"
        src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1699870799/Startopas/startopas_logo.png"
        alt="Startopas"
        loading="lazy"
      />
      Startopas
    </Link>
  );
};

export default FormLogo;
