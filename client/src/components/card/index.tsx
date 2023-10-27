import React from "react";
import Rating from "../rating";
import { ProductCard } from "../../interfaces/product_interfaces";
import { Link } from "react-router-dom";

const Card: React.FC<ProductCard> = ({
  _id,
  image,
  name,
  rating,
  price,
  numReviews,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <Link to={`/product/${_id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-contain rounded-md hover:scale-105 transition duration-500"
        />
      </Link>
      <Link to={`/product/${_id}`}>
        <h3 className="text-2xl font-semibold mt-2">{name}</h3>
      </Link>
      <div className="flex items-center mt-2">
        <div>
          <Rating value={rating} text={`${numReviews} įvertinimų`} />
        </div>
      </div>
      <p className="text-xl text-gray-600 mt-2">Kaina: {price.toFixed(2)}€</p>
    </div>
  );
};

export default Card;
