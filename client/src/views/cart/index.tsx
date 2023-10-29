import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../services/slices/cartSlice";
import { Product } from "../../interfaces/productInterfaces";
import AppLayout from "../../layouts/main";
import { FaTrash } from "react-icons/fa";

const CartView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product: Product, qty: number) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id: string) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <AppLayout header="Krepšelis">
      <div className="w-full pt-20 lg:pt-28">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Prekių Krepšelis
        </h2>
        {cartItems.length === 0 ? (
          <div className="text-center my-6">
            Jūsų prekių krepšelis yra tuščias{" "}
            <Link to="/" className="text-blue-700 hover:text-blue-500 border-b">
              Grįžti
            </Link>
          </div>
        ) : (
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item: Product) => (
                <div
                  className="justify-between mb-6 rounded-lg border border-white p-6 shadow-md sm:flex sm:justify-start"
                  key={item._id}
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="w-full rounded-lg sm:w-40 h-full"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </Link>
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <Link to={`/product/${item._id}`}>
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                      </Link>
                      <p>{item.category}</p>
                      <select
                        className="my-3 block w-18 p-2 border text-sm rounded-lg border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-end space-x-4 mt-2">
                        <p className="text-xl text-gray-600 font-medium">
                          €{(item.price * item.qty).toFixed(2)}
                        </p>
                        <button
                          className="border rounded-md py-1 px-1 hover:text-red-600"
                          type="button"
                          onClick={() => removeFromCartHandler(item._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- Sub total --> */}
            <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p>Bendrai</p>
                <p>
                  (
                  {cartItems.reduce(
                    (acc: number, item: Product) => acc + item.qty,
                    0
                  )}
                  )
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Iš viso</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    €
                    {cartItems
                      .reduce(
                        (acc: number, item: Product) =>
                          acc + item.qty * item.price,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                type="button"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Apmokėti
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default CartView;
