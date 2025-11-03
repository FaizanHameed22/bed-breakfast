import React from "react";
import "./Home.css";
import hero from "../../../src/assets/images/hero-bg.jpg"

const Home = () => {
  return (
    <section className="hero-section">
      <img className="background-img" src={hero} alt="Modern Bed and Breakfast" />
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <h1>
          Experience Luxury
<br />JapanStation Residency
        </h1>
        <p className="hero-subheading">Discover comfort, style & remarkable service in the heart of Japan.</p>
        <a href="#rooms" className="hero-btn">Explore Our Rooms</a>
      </div>
    </section>
  );
};

export default Home;
