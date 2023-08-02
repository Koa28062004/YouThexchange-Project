import React from 'react';
import "../SDGs.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="row">
          <div className="imglogo">
            <img src="Pictures/SUGAR_Vietnamlogo.png" alt="" />
            <img src="Pictures/Youth_exchangelogo.png" alt="" />
          </div>
          <div className="footer-col">
            <h4>GET HELP</h4>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Copyright</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100094353529762&mibextid=LQQJ4d">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
