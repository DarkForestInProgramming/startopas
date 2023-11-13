import { Link } from "react-router-dom";
import { ProductInterface } from "../../services/interfaces/productInterfaces";

const PlaceCartItem = (props: { item: ProductInterface }) => {
  return (
    <div className="flex items-center -mx-4 px-4 py-4">
      <div className="flex w-full">
        <div className="w-1/2 md:w-1/5 lg:w-1/5">
          <Link to={`/product/${props.item._id}`}>
            <img
              className="w-full h-20 sm:w-full sm:h-24"
              src={props.item.image}
              alt={props.item.name}
            />
          </Link>
        </div>
        <div className="w-3/4 md:w-4/5 lg:w-4/5 pl-4">
          <span className="font-bold text-sm">{props.item.name}</span>
        </div>
      </div>
      <div className="w-1/5 text-center">
        {props.item.qty} x {props.item.price}€ ={" "}
        {props.item.qty * props.item.price}€
      </div>
    </div>
  );
};

export default PlaceCartItem;
