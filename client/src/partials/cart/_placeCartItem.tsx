import { Link } from "react-router-dom";
import { PlaceCartItemInterface } from "../../services/interfaces/productInterfaces";

const PlaceCartItem: React.FC<PlaceCartItemInterface> = ({ item }) => {
  return (
    <div className="flex items-center -mx-4 px-4 py-4">
      <div className="flex w-full">
        <div className="w-1/2 md:w-1/5 lg:w-1/5">
          <Link to={`/product/${item._id}`}>
            <img
              className="w-full h-20 sm:w-full sm:h-24"
              src={item.image}
              alt={item.name}
            />
          </Link>
        </div>
        <div className="w-3/4 md:w-4/5 lg:w-4/5 pl-4">
          <span className="font-bold text-sm">{item.name}</span>
        </div>
      </div>
      <div className="w-1/5 text-center">
        {item.qty} x {item.price}€ = {item.qty * item.price}€
      </div>
    </div>
  );
};

export default PlaceCartItem;
