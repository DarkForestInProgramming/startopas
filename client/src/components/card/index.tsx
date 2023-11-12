import React from "react";
import Rating from "../rating";
import { ProductCardInterface } from "../../services/interfaces/productInterfaces";
import { Link } from "react-router-dom";

const Card: React.FC<ProductCardInterface> = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <Link to={`/product/${props._id}`}>
        <img
          className="w-full h-96 object-contain rounded-md hover:scale-105 transition duration-500"
          src={props.image}
          alt={props.name}
          loading="lazy"
        />
      </Link>
      <Link to={`/product/${props._id}`}>
        <h3 className="text-2xl font-semibold mt-2">{props.name}</h3>
      </Link>
      <div className="flex items-center mt-2">
        <div>
          <Rating
            value={props.rating}
            text={`${props.numReviews} įvertinimų`}
          />
        </div>
      </div>
      <p className="text-xl text-gray-600 mt-2">€{props.price.toFixed(2)}</p>
    </div>
  );
};

export default Card;
