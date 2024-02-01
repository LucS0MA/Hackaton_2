import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Acceuil",
    // element: <Accueil />,
  },
  {
    path: "/shop",
    //element: <Shop />,
  },
  {
    path: "/homme",
    //element: <Shop />,
  },
  {
    path: "/femme",
    //element: <Shop />,
  },
  {
    path: "/enfant",
    //element: <Shop />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
