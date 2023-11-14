import React from "react";
import Rating from "../rating";
import { ProductCardInterface } from "../../../services/interfaces/productInterfaces";
import { Link } from "react-router-dom";

const Card: React.FC<ProductCardInterface> = ({
  _id,
  image,
  name,
  rating,
  numReviews,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <Link to={`/product/${_id}`}>
        <img
          className="w-full h-96 object-contain rounded-md hover:scale-105 transition duration-500"
          src={image}
          loading="lazy"
          alt={name}
        />
      </Link>
      <Link to={`/product/${_id}`}>
        <h3 className="text-xl font-medium mt-2">{name}</h3>
      </Link>
      <div className="flex items-center mt-2">
        <div>
          <Rating value={rating} text={`${numReviews} įvertinimų`} />
        </div>
      </div>
      <p className="text-lg font-medium text-gray-600 mt-2">
        €{price.toFixed(2)}
      </p>
    </div>
  );
};

export default Card;
