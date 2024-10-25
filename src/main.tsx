import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";

import Error from "./pages/error.tsx";
import Home from "./pages/home.tsx";
import LocationHours from "./pages/location&Hours.tsx";
import Menu from "./pages/menu.tsx";
import OrderOnline from "./pages/orderOnline.tsx";
import Contact from "./pages/contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'location&hours',
        element: <LocationHours />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: '/orderonline',
        element: <OrderOnline />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
