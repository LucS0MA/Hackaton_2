import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Homme from "./pages/Homme";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        //element: <Home />,
      },
      {
        path: "/homme",
        element: <Homme />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
