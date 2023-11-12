import React from "react";
import ReactDOM from "react-dom/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./app/store";
import "./assets/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true} options={{ clientId: "" }}>
        <RouterProvider router={AppRoutes} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
