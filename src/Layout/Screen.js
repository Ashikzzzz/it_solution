import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";

const Screen = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Screen;
