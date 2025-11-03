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

      </video>

      <div className="hero-content">
        <h1>Luxury Bed&Breakfast <br></br>
          where to stay</h1>


      </div>
    </section>
  );
};

export default Home;
