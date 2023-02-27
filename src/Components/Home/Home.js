import React, { useEffect, useState } from "react";
import "./Home.css";
// import banner from "../../assets/banner.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // class WebBanner extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       navbarOpen: false
  //     };
  //     this.toggleNavbar = this.toggleNavbar.bind(this);
  //   }

  //   toggleNavbar() {
  //     this.setState(prevState => ({
  //       navbarOpen: !prevState.navbarOpen
  //     }));
  //   }

  return (
    <div>
      <div className="banner">
        {" "}
        <div className="navbar  nav-banner">
          <div className="navbar-start ">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                <li>
                  <a className="text-black">Home</a>
                </li>

                <li>
                  <a>Feature</a>
                </li>
                <li>
                  <a>Our Team</a>
                </li>
                <li>
                  <a>Service</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-black">Home</a>
              </li>

              <li>
                <a>Feature</a>
              </li>
              <li>
                <a>Our Team</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <img src={banner} alt="Banner Graphic" /> */}
        <div className="banner-container">
          <h1 className={`banner-text ${animate ? "animate" : ""}`}>
            Animated Banner Text
            <span>Ashikur</span>
          </h1>
        </div>
        <p className="scroll-down">Scroll down to learn</p>
      </div>
    </div>
  );
};

export default Home;
