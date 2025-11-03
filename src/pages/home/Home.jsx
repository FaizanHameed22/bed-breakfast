import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        {/* <p>Luxury B&B Experience</p> */}
        <h1>Luxury Bed&Breakfast <br></br>
        where to stay</h1>
        
        {/* <button className="hero-btn">Book Now</button> */}
      </div>
    </section>
  );
};

export default Home;
