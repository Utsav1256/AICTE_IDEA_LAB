import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import GalleryAll from "./components/GAlleryAll";

const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div id="preloader"></div>
      ) : (
        <div className="app-container">
          <Banner />
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <GalleryAll />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
