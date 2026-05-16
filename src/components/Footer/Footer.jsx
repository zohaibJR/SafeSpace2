import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-container">

          {/* Left – Brand & Contact */}
          <div className="footer-column footer-left">
            <p className="footer-brand-name">SafeSpace</p>
            <p className="footer-tagline-small">A virtual therapy & counselling platform</p>

            <a href="mailto:safespace.counselandtherapy@gmail.com" className="footer-email">
              safespace.counselandtherapy@gmail.com
            </a>

            <div className="social-buttons">
              <a href="#whatsapp" className="social-btn">📱 WhatsApp</a>
              <a href="#linkedin" className="social-btn">💼 LinkedIn</a>
            </div>
          </div>

          {/* Center – Tagline & CTAs */}
          <div className="footer-column footer-center">
            <p className="platform-tagline">
              "Your healing journey begins<br />with a single conversation."
            </p>

            <div className="footer-cta-group">
              <button className="footer-btn btn-outline-light">
                Book Free Intro Session
              </button>
              <button className="footer-btn btn-solid-light">
                Book Therapy Session
              </button>
            </div>
          </div>

          {/* Right – Links */}
          <div className="footer-column footer-right">
            <p className="footer-links-label">Quick Links</p>
            <a href="#terms" className="footer-link">Terms &amp; Conditions</a>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#contact" className="footer-link">Contact Us</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} SafeSpace. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;