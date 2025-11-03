import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()}   JapanStation Residency</p>
    </footer>
  );
};

export default Footer;
