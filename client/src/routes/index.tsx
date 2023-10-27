import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomeView from "../views/home";
import NotFoundView from "../views/404";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeView />} />
      <Route path="*" element={<NotFoundView />} />
    </Route>
  )
);

export default AppRoutes;
