
import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Brand Info */}
        <div className="footer-section">
          <h3 className="footer-title">Petcy</h3>
          <p className="footer-text">
            Your trusted partner in pet care since 2025. Providing the best products and services for your furry friends.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><NavLink to="/dashboard" className="footer-link">Home</NavLink></li>
            <li><NavLink to="/pet-list" className="footer-link">Pet List</NavLink></li>
            <li><NavLink to="/care-tips" className="footer-link">Care Tips</NavLink></li>
          </ul>
        </div>

        {/* Right: Contact Info + Socials */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-text">Email: sansaisansai2003.com</p>
          <p className="footer-text">Phone: +91-9488311749</p>
          <div className="footer-social">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:sansaisansai2003@gmail.com" className="social-icon"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Petcy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
