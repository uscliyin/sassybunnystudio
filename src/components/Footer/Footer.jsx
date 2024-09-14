// Home.js
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.scss'; // Assuming you have a CSS file for the footer

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="column">
          <h1>About Us</h1>
          <p>
          Welcome to SassyBunny studio, our press-on nails offer a perfect blend of beauty and practicality, allowing you to achieve salon-quality results without leaving your home. Whether you're prepping for a special occasion or simply want to elevate your everyday look, our nails are designed to be easy to apply and long-lasting.<br />
We are passionate about providing you with the best possible experience, which is why we prioritize customer satisfaction in everything we do. Explore our collections, find your perfect match, and let your nails be the statement pieces they were meant to be.
          </p>
        </div>
        <div className="column">
          <h1>Contact</h1>
          <span className="contact-item">
            <InstagramIcon className="icon" />
            <a href="https://www.instagram.com/sassybunnystudio?igsh=MWhpYndsdHc3b2hybA==" className="ins-link">@sassybunnystudio</a>
          </span>
          <span className="contact-item">
            <EmailIcon className="icon" />
            <a href="mailto:info@sassybunnystudio.com" className="email-link">info@sassybunnystudio.com</a>
          </span>
          <span className="contact-item">
            <LocationOnIcon className="icon" />
            <span>Los Angeles, CA</span>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/Payment/Payment_Transparent.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;