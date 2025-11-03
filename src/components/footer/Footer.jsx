import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()}  Bed&Breakfast - by Ansonika</p>
    </footer>
  );
};

export default Footer;
