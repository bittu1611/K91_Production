import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/images/K91LOGO.png';






const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const location = useLocation();

  // Scroll effect for hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setScrolled(true);
        
        // Navbar hide/show logic
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setNavHidden(true); // Scroll down - hide
        } else {
          setNavHidden(false); // Scroll up - show
        }
      } else {
        setScrolled(false);
        setNavHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${navHidden ? 'hidden' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={Logo} alt="Portfolio Logo" className="logo-img" />
          {/* Optional: Text bhi add kar sakte hain */}
          {/* <span className="logo-text">Portfolio</span> */}
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/project" 
              className={location.pathname === '/project' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Mobile Overlay */}
        <div 
          className={`nav-overlay ${isOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;