import React from "react";

import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          It delivers good food and be healthy. It uses for giving good food from Food Restaurants.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
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
