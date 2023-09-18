import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Banner from "./components/Banner";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Banner />
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
