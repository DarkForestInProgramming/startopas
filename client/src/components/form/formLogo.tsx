import { Link } from "react-router-dom";

const FormLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      />
      Startopas
    </Link>
  );
};

export default FormLogo;
