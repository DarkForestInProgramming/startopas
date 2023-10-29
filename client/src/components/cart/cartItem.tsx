import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItem = (props: {
  _id: string;
  name: string;
  image: string;
  category: string;
  countInStock: number;
  price: number;
  qty: number;
  addToCartHandler: any;
  removeFromCartHandler: any;
}) => {
  return (
    <div
      className="justify-between mb-6 rounded-lg border border-white p-6 shadow-md sm:flex sm:justify-start"
      key={props._id}
    >
      <Link to={`/product/${props._id}`}>
        <img
          className="w-full rounded-lg sm:w-40 h-full"
          src={props.image}
          alt={props.name}
          loading="lazy"
        />
      </Link>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <Link to={`/product/${props._id}`}>
            <h2 className="text-lg font-semibold">{props.name}</h2>
          </Link>
          <p>{props.category}</p>
          <select
            className="my-3 block w-18 p-2 border text-sm rounded-lg border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            value={props.qty}
            onChange={(e) =>
              props.addToCartHandler(props, Number(e.target.value))
            }
          >
            {[...Array(props.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-end space-x-4 mt-2">
            <p className="text-xl text-gray-600 font-medium">
              €{(props.price * props.qty).toFixed(2)}
            </p>
            <button
              className="border rounded-md py-1 px-1 hover:text-red-600"
              type="button"
              onClick={() => props.removeFromCartHandler(props._id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
