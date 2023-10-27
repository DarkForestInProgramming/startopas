import React from "react";
import Rating from "../rating";

interface CardProps {
  image: string;
  title: string;
  rating: number;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, title, rating, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <div className="flex items-center mt-1">
        <div className="text-yellow-400">
          <Rating value={3} text={`įvertinimų`} />
        </div>
      </div>
      <p className="text-gray-600 mt-2">Kaina: {price.toFixed(2)}€</p>
    </div>
  );
};

export default Card;
