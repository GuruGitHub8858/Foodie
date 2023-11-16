import React from "react";
import Logo from '../Assets/Logo.svg'
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>n
        <p className="primary-text">
          It delivers good food and be healthy. It uses for giving good food from Food Restaurants.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile" src={Logo} alt="" />
        <p>
          Good Food Makes You Healthy. Always Ordered Good Food And Make Your Health Good .
        </p>
        <div className="testimonials-stars-container">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <h2>Guru</h2>
      </div>
    </div>
  );
};

export default Testimonial;
