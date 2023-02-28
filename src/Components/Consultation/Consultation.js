import React from "react";
import "./Consultation.css";
// import consult from "../../assets/consult.jpg";

const Consultation = () => {
  return (
    <div className="flex justify-evenly items-center mt-48 consult-container">
      <div className="consult w-1/2">
        <div className="consult-text">
          {/* <img src={consult} alt="" /> */}
          <h1 className="font-bold text-5xl text-black mt-8 ml-6">
            {" "}
            Welcome to the consult section
          </h1>
          <p className="font-bold text-black mt-6 ml-6">
            WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="text-3xl font-bold my-10">Type Here</h2>
        <div className="">
          <form className="flex flex-col gap-y-8">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full "
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full"
            />
            <textarea
              className="textarea textarea-primary"
              placeholder="Leave a message"
            ></textarea>
            <button className="animated-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
