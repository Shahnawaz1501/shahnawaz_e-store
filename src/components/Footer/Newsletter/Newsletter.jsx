import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className=" big-text">SignUp for new arrivals and offers </span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>SignUp</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
          <div className="icon">
            <FaYoutube size={14} />
          </div>
          <div className="icon">
            <FaPinterest size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
