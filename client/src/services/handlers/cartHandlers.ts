import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { ProductInterface } from "../interfaces/productInterfaces";

export const useCartHandlers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product: ProductInterface, qty: number) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id: string) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return {
    cartItems,
    addToCartHandler,
    removeFromCartHandler,
    checkoutHandler,
  };
};
