import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import "../index.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#docs">Docs</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#help-center">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>© 2024 DevSync. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
