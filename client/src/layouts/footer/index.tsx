import { currentYear } from "../../services/constants/globalConstants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p>Visos teisės saugomos &copy; Startopas, {currentYear}.</p>
          <p>Kontaktai: sipelis.d@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
