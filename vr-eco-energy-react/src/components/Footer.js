import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VR Eco Energy</h3>
            <p>Leading the transition to a sustainable energy future through innovative infrastructure solutions and commitment to environmental stewardship.</p>
            <p><strong>Founded:</strong> 2016 by Mr. Ramshibhai Goriya</p>
            <p><strong>Location:</strong> Gujarat, India</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/utility">Utility Tools</Link></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>
          
          <div className="footer-section">
            <h3>Our Services</h3>
            <p><Link to="/services#wtg">WTG Projects</Link></p>
            <p><Link to="/services#manpower">Manpower Services</Link></p>
            <p><Link to="/services#equipment">Equipment Rental</Link></p>
            <p><Link to="/services#engineering">Design & Engineering</Link></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 Surat, Gujarat, India</p>
            <p>📞 Phone: +91 990 428 9999</p>
            <p>✉️ Email: info@vr-eco.com</p>
            <p>🕒 Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 VR Eco Energy. All rights reserved. | Designed with sustainability in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;