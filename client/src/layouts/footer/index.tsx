import { currentYear } from "../../services/constants/globalConstants";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-neutral-200 p-4">
      <div className="container mx-auto font-thin">
        <div className="flex flex-col items-center justify-center">
          <p>Visos teisės saugomos &copy; Startopas, {currentYear}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
