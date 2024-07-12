import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="homepage-info">
      <div className="info-img">
        <img src={assets.foodposter} alt="" className="foodposter-img" />
      </div>
      <div className="info-part">
        <h2>Your healthy choice is here.</h2>
        <h5>
          Established in 2020, Isine Mess was born from a passion for bringing
          delicious and wholesome meals to the Isine community.We believe that
          good food is essential for a healthy and happy life, and that's why we
          take pride in using fresh, high-quality ingredients to create a menu
          that's both satisfying and nourishing.
        </h5>
        <p>
          We're not just your average canteen. We're a team dedicated to
          providing a convenient and enjoyable dining experience.
        </p>
        <button className="aboutus-button"> More About Us</button>
      </div>
    </div>
  );
};

export default About;
