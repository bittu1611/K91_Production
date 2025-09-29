import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true); // is navbar interactive?

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      let newOpacity = 1 - scrollTop / 200; // scroll 0-200 px me fade
      if (newOpacity < 0) newOpacity = 0; // puri tarah gayab
      setOpacity(newOpacity);
      setVisible(newOpacity > 0); // visible tab hi true
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        opacity: opacity,
        pointerEvents: visible ? "auto" : "none", // click disable when invisible
      }}
    >
      <div className="nav-container">
        {/* Logo */}
        <div id="logoback">
          <Link to="/">
            <img
              src="/navbar_img/K91PNGLOGO.png"
              alt="Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => visible && setMenuOpen(!menuOpen)} // only work if visible
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${menuOpen ? "open" : ""}`}
          style={{ pointerEvents: visible ? "auto" : "none" }} // disable links when invisible
        >
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/project" onClick={() => setMenuOpen(false)}>Project</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
