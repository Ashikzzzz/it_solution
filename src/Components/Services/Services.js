import React from "react";
import "./Services.css";
import work1 from "../../assets/work1.jpg";

const Services = () => {
  return (
    <div className="card-res">
      <h1 className="text-center font-bold text-4xl mb-8">Services</h1>
      <div className="grid lg:grid-cols-3 gap-y-16 ">
        <div className="card">
          <img src={work1} alt="Placeholder" />
          <h3>Data Analysis</h3>
          <p>Card Description</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src={work1} alt="Placeholder" />
          <h3>Card Title</h3>
          <p>Card Description</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src={work1} alt="Placeholder" />
          <h3>Card Title</h3>
          <p>Card Description</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src={work1} alt="Placeholder" />
          <h3>Card Title</h3>
          <p>Card Description</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src={work1} alt="Placeholder" />
          <h3>Card Title</h3>
          <p>Card Description</p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src={work1} alt="Placeholder" />
          <h3>Card Title</h3>
          <p>Card Description</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
