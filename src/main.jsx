import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Error from "./Components/Error.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
