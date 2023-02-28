import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Consultation from "../Consultation/Consultation";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Works from "../Works/Works";

const HomeMain = () => {
  return (
    <div>
      <Home></Home>
      <AboutUs></AboutUs>
      <Services></Services>
      <Consultation></Consultation>
    </div>
  );
};

export default HomeMain;
