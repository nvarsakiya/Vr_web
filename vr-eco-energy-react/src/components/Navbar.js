import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/img/canvas.png" alt="VREco Energy Pvt Ltd" style={{ height: '75px' }} />
        </Link>
        <div className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/services" className={isActive('/services')} onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/projects" className={isActive('/projects')} onClick={closeMobileMenu}>Projects</Link></li>
          <li><Link to="/utility" className={isActive('/utility')} onClick={closeMobileMenu}>Utility</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;