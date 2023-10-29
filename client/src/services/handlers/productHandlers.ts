import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

export const useProductHandlers = () => {
  const [qty, setQty] = useState<number>(1);
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return { addToCartHandler, qty, setQty, product, isLoading };
};
