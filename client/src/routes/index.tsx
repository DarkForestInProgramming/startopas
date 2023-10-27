import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomeView from "../views/home";
import NotFoundPage from "../views/404";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeView />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default AppRoutes;
