import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left with Logo */}
        <div className="footer-left">
          <img src="/navbar_img/K91PNGLOGO.png" alt="" className="footer-logo" />
          <p>Bringing your vision to life with stunning visuals and creativity.</p>
        </div>

        {/* Center Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Socials */}
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} K91 Productions. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
