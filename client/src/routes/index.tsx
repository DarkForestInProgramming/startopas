import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../app/App";
import HomeView from "../views/home";
import NotFoundView from "../views/404";
import ProductView from "../views/product";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeView />} />
      <Route path="/product/:id" element={<ProductView />} />
      <Route path="*" element={<NotFoundView />} />
    </Route>
  )
);

export default AppRoutes;
