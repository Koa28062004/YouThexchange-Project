import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="row">
          <div className="imglogo">
            <img
              src={require("../SDGs_Page/Pictures/SUGAR_Vietnamlogo.png")}
              alt=""
            />
            <img
              src={require("../SDGs_Page/Pictures/Youth_exchangelogo.png")}
              alt=""
            />
            <img src={require("../SDGs_Page/Pictures/Kis_logo.png")} alt="" />
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:youthexchangeprojectvn@gmail.com">
                  <i class="fa-solid fa-at"></i> Gmail:<br></br>{" "}
                  youthexchangeprojectvn@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100094353529762&mibextid=LQQJ4d">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/youthexchange.project/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
