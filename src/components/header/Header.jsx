import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">Bed&Breakfast</h1>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#rooms">Rooms</a>
        <a href="#gallery">Gallery</a>
        <a href="#activities">Activities</a>
        <a href="#contacts">Contacts</a>

        <button className="book-now" onClick={() => {
          const contactSection = document.getElementById("contacts");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>
          Book Now
        </button>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
