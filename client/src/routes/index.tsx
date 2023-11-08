import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../app/App";
import HomeView from "../views/home";
import NotFoundView from "../views/404";
import ProductView from "../views/product";
import CartView from "../views/cart";
import LoginView from "../views/login";
import RegisterView from "../views/register";
import ShippingView from "../views/shipping";
import PrivateRoute from "./privateRoute";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* @desc Public Routes */}
      <Route index={true} path="/" element={<HomeView />} />
      <Route path="/product/:id" element={<ProductView />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="*" element={<NotFoundView />} />
      {/* @desc Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingView />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
