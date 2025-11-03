import React, { useState } from "react";
import "./Header.css";
import logo from "../../../src/assets/images/japanstationlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <img className="logo" src={logo} height={48} alt="Japan Station Residencies Logo" />
        <nav className={`nav-links ${isOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#activities">Activities</a>
          <a href="#contacts">Contacts</a>
          <button className="book-now" onClick={() => {
            const contactSection = document.getElementById("contacts");
            if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
          }}>Book Now</button>
        </nav>
        {/* Hamburger Icon */}
        <button className="hamburger" aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="nav" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
