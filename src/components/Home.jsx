import React from "react";
import "../styles/Home.css";
import image1 from '../images/image1.jpg';
import ingr from '../images/ingredients.jpg';
import homec from '../images/homecook.jpg';
import fooddel from '../images/fooddelivery1.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <img src={image1} alt="Home Cooked Food" className="home-banner-image" />
        <div className="home-banner-text">
          <h1>Welcome to Home Dine</h1>
          <p>Enjoy delicious home-cooked meals delivered to your doorstep.</p>
        </div>
      </div>
      <div className="home-content">
        <h2>Why Choose Us?</h2>
        <div className="home-features">
          <div className="home-feature">
            <img src={ingr} alt="Quality Ingredients" className="home-feature-image" />
            <h3>Quality Ingredients</h3>
            <p>We use only the freshest and highest quality ingredients in all our meals.</p>
          </div>
          <div className="home-feature">
            <img src={homec} alt="Experienced Home Cooks" className="home-feature-image" />
            <h3>Experienced Home Cooks</h3>
            <p>Our meals are prepared by skilled home cooks who bring the taste of home to your table.</p>
          </div>
          <div className="home-feature">
            <img src={fooddel} alt="Timely Delivery" className="home-feature-image" />
            <h3>Timely Delivery</h3>
            <p>We ensure your meals are delivered hot and fresh, right on time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
