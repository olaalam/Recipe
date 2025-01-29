import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import Notfound from "./components/Notfound";
import Layout from "./components/Layout";


import "./App.css";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/details/:id", element: <Details /> },
        { path: "/*", element: <Notfound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
