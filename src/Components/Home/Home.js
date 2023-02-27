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
    <div>
      <div className="banner">
        <nav className="nav-banner">
          <div>
            <h1>Company Logo</h1>
          </div>
          <div>
            <ul className="navbar">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <img src={banner} alt="Banner Graphic" /> */}
        <div className="banner-container">
          <h1 className={`banner-text ${animate ? "animate" : ""}`}>
            Animated Banner Text
            <span>Ashikur</span>
          </h1>
          <p className="scroll-down">Scroll down to learn</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
