import { Link } from "react-router-dom";

const EmptySection = () => {
  return (
    <div className="text-center my-6">
      Jūsų prekių krepšelis yra tuščias{" "}
      <Link to="/" className="text-blue-700 hover:text-blue-500 border-b">
        Grįžti
      </Link>
    </div>
  );
};

export default EmptySection;
