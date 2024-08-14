import React from "react";
import "../styles/About.css";
import teamImage from '../images/team.jpg'; // Replace with your image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h3>About Us</h3>
        <p>
          We provide delicious home-cooked meals delivered to your doorstep. 
          Our mission is to support home cooks and provide healthy food options.
        </p>
        <img src={teamImage} alt="Our Team" className="team-image" />
        <div className="details">
          <div className="detail">
            <h4>Our Mission</h4>
            <p>
              We strive to create a platform where home cooks can share their 
              passion for cooking with the community. We believe in supporting local 
              talents and promoting healthy eating habits.
            </p>
          </div>
          <div className="detail">
            <h4>Our Values</h4>
            <p>
              Quality, integrity, and community are at the heart of everything we do. 
              We are committed to ensuring that every meal we deliver meets our high 
              standards of quality and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
