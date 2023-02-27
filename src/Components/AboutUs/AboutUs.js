import React from "react";
import heroImage from "../../assets/Sadman_IT_web_development_data_analysis_IoT_networking__AI_serv_0f024fc6-3e2f-4224-8b29-0065e6d9a8f4.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-4xl mb-4">About Us</h1>
      <div className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to My Website</h1>
          <p>Explore the world of React and beyond with me</p>
          <button className="animated-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
