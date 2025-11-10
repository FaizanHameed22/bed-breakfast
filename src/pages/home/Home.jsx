import React from "react";
import "./Home.css";
import hero from "../../../src/assets/images/hero-bg.jpg"
import airbnb from '../../../src/assets/images/airbnb.svg';
import tripadvisor from '../../../src/assets/images/tripadvisor.svg';

const Home = () => {
  return (
    <section className="hero-section">
      <img className="background-img" src={hero} alt="Modern Bed and Breakfast" />
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <h1>
          Experience Luxury<br />JapanStationResidency
        </h1>
        <p className="hero-subheading">Discover comfort, style & remarkable service in the heart of Japan.</p>
        <div className="hero-logos" style={{display: 'flex', gap: '18px', justifyContent: 'center', alignItems: 'center', margin: '18px 0'}}>
          <img src={airbnb} alt="Airbnb" height="38" style={{ borderRadius:'9px', padding:'3px 8px'}} />
          {/* <img src={booking} alt="Booking.com" height="36" style={{background:'#fff', borderRadius:'9px', padding:'3px 10px'}} /> */}
          <img src={tripadvisor} alt="TripAdvisor" height="36" style={{ borderRadius:'9px', padding:'3px 8px'}} />
        </div>
        {/* <a href="#rooms" className="hero-btn">Explore Our Rooms</a> */}
      </div>
    </section>
  );
};

export default Home;
