import React from "react";
import "./Room.css";
import { FaBed, FaTv, FaBath, FaWifi, FaSnowflake, FaSoap } from "react-icons/fa";
import roomImage from "../../assets/images/room1.png";
import roomImage2 from "../../assets/images/room2.png";
import roomImage3 from "../../assets/images/room3.png";

const Room = () => {
  return (
    <>
      {/*  ID added for smooth scroll target */}
      <section id="rooms" className="room-section">
        <div>
          <p>Luxury experience</p>
          <h1>Our Rooms</h1>
        </div>

        {/* First Room - Image Left, Content Right */}
        <div className="room-container">
          <div className="room-image">
            <img src={roomImage} alt="Double Room" />
          </div>
          <div className="room-content">
            {/* <p className="price">FROM $150/NIGHT</p> */}
            <h2 className="room-title">Double Room</h2>
            <p className="room-description">
              Beautiful design with modern furnishings including a glamorous bay
              window with your own private view of Lucerne.
            </p>
            <div className="room-features">
              <div className="feature-f">
                <FaBed className="icon" />
                <span>King Size Bed</span>
              </div>
              <div className="feature-f">
                <FaTv className="icon" />
                <span>32 Inc TV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Room - Content Left, Image Right */}
        <div className="room-container-reversed">
          <div className="room-details">
            {/* <p className="room-price">FROM $200/NIGHT</p> */}
            <h2 className="suite-title">Drawing Room</h2>
            <p className="suite-description">
            Stylishly designed space offering a warm and inviting ambiance, adorned with elegant décor and plush seating ideal for meetings, relaxation, or entertaining guests in comfort.
            </p>
            <div className="suite-features">
              {/* <div className="suite-feature">
                <FaBed className="icon" />
                <span>King Size Bed</span>
              </div> */}
              <div className="suite-feature">
                <FaTv className="icon" />
                <span>42 Inc Smart TV</span>
              </div>
            </div>
          </div>
          <div className="suite-image">
            <img src={roomImage2} alt="Deluxe Suite" />
          </div>
        </div>

        {/* Third Room */}
        <div className="room-container">
          <div className="room-image">
            <img src={roomImage3} alt="Double Room" />
          </div>
          <div className="room-content">
            {/* <p className="price">FROM $150/NIGHT</p> */}
            <h2 className="room-title">TV Lounge</h2>
            <p className="room-description">
             Elegant and cozy space designed for relaxation, featuring modern décor, comfortable seating, and a large flat-screen TV  the perfect spot to unwind and enjoy your favorite shows.
            </p>
            <div className="room-features">
              {/* <div className="feature-f">
                <FaBed className="icon" />
                <span>King Size Bed</span>
              </div> */}
              <div className="feature-f">
                <FaTv className="icon" />
                <span>32 Inc TV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ID added for smooth scroll to "Facilities" if needed */}
      <section id="facilities" className="facilities-section">
        <div className="facilities-header">
          <p className="facilities-subtitle">LUXURY B&B EXPERIENCE</p>
          <h2 className="facilities-title">Main Facilities</h2>
        </div>

        <div className="facilities-container">
          <div className="facility-box">
            <FaBath className="facility-icon" />
            <h3>Large Bath Room</h3>
            <p>
             Immaculately maintained bathroom featuring modern fixtures, fresh linens, and a soothing ambiance  offering guests a refreshing and hygienic experience every time
            </p>
          </div>

          <div className="facility-box">
            <FaWifi className="facility-icon" />
            <h3>High Speed Wifi</h3>
            <p>
             Enjoy seamless connectivity with our ultra-fast Wi-Fi, ensuring smooth streaming, video calls, and online browsing throughout your stay.</p>
          </div>

          <div className="facility-box">
            <FaSnowflake className="facility-icon" />
            <h3>Air Condition</h3>
            <p>
              Stay comfortable year-round with our efficient climate control system, providing cool, refreshing air and personalized temperature settings for your perfect comfort.
            </p>
          </div>

          <div className="facility-box">
            <FaSoap className="facility-icon" />
            <h3>Washing Machine</h3>
            <p>
             Convenient in-room washing machine available for your use, allowing you to refresh your clothes easily and enjoy a hassle-free, extended stay.
            </p>
          </div>
        </div>
      </section>

      {/*  ID added for scroll target if linked */}
      <section id="experience" className="experience-section">
        <div className="experience-overlay">
          <div className="experience-content">
            <p>Luxury Hotel Experience</p>
            <h1>
              Enjoy in a very <br /> Immersive Relax
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
