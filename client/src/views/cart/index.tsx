import { ProductInterface } from "../../services/interfaces/productInterfaces";
import { useCartHandlers } from "../../services/handlers/cartHandlers";
import AppLayout from "../../layouts/main";
import CartItem from "../../components/cart/cartItem";
import EmptySection from "../../components/cart/emptySection";
import SubTotal from "../../components/cart/subTotal";

const CartView = () => {
  const {
    cartItems,
    addToCartHandler,
    removeFromCartHandler,
    checkoutHandler,
  } = useCartHandlers();

  return (
    <AppLayout header="Krepšelis">
      <div className="w-full md:py-16 py-8">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Prekių Krepšelis
        </h2>
        {cartItems.length === 0 ? (
          <EmptySection />
        ) : (
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item: ProductInterface) => (
                <CartItem
                  _id={item._id}
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  countInStock={item.countInStock}
                  price={item.price}
                  qty={item.qty}
                  addToCartHandler={addToCartHandler}
                  removeFromCartHandler={removeFromCartHandler}
                />
              ))}
            </div>
            <SubTotal cartItems={cartItems} checkoutHandler={checkoutHandler} />
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default CartView;
