import React, { useEffect, useState } from "react";
import "./Home.css";
// import banner from "../../assets/banner.jpg";
import { motion } from "framer-motion";
const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="banner">
      {/* <img src={banner} alt="Banner Graphic" /> */}
      <div className="banner-container">
        <h1 className={`banner-text ${animate ? "animate" : ""}`}>
          Animated Banner Text
          <span>Ashikur</span>
        </h1>
        <p className="scroll-down">Scroll down to learn</p>
      </div>
    </div>
  );
};

export default Home;
