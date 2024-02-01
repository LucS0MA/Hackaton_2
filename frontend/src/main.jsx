import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Homme from "./pages/Homme";
import Femme from "./pages/Femme";
import Enfant from "./pages/Enfant";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/homme",
        element: <Homme />,
        children: [
          {
            path: "/homme/:souscategorie",
            element: <Homme />,
          },
        ],
      },
      {
        path: "/femme",
        element: <Femme />,
        children: [
          {
            path: "/femme/:souscategorie",
            element: <Femme />,
          },
        ],
      },
      {
        path: "/enfant",
        element: <Enfant />,
        children: [
          {
            path: "/enfant/:souscategorie",
            element: <Enfant />,
          },
        ],
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
