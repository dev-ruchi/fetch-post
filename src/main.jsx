import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import PostsList from "./PostsList.jsx";
import PostDetails from "./PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/posts",
        element: <PostsList />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> 
    <RouterProvider router={router} />
  </React.StrictMode>
);
