import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const Home = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Home</p>
        <h1 className="primary-heading">
          Kec
        </h1>
        <p className="primary-text">
          Food is essential for our body for a number of reasons.
          It gives us the energy needed for working, playing, and doing day-to-day activities.
        </p>
        <p className="primary-text">
          Being healthy does take discipline when you have fast foods and different types of restaurants at every corner, but the outcome may shock you.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
