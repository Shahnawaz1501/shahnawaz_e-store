import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Dummy street, main road Bangalore - 123456 
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 9844179776</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: shnwzcse@mail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Clothes</span>
          <span className="text">Electronics</span>
          <span className="text">Shoes</span>
          <span className="text">Cosmetics</span>
          <span className="text">Home Decor</span>
          <span className="text">Others</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">SHAAN STORES PREMIUM @ 2023</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
