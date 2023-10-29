import { FC } from "react";
import { ProductRating } from "../../services/interfaces/productInterfaces";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating: FC<ProductRating> = (props) => {
  return (
    <div className="rating-container">
      <span className="rating-star">
        {props.value >= 1 ? (
          <FaStar />
        ) : props.value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-star">
        {props.value >= 2 ? (
          <FaStar />
        ) : props.value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-star">
        {props.value >= 3 ? (
          <FaStar />
        ) : props.value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-star">
        {props.value >= 4 ? (
          <FaStar />
        ) : props.value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-star">
        {props.value >= 5 ? (
          <FaStar />
        ) : props.value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-text ">{props.text && props.text}</span>
    </div>
  );
};

export default Rating;
