import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import bcg1 from "../static/images/bcg1.jpg";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Banner />
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
