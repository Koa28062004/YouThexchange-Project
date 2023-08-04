import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="logo_f">
        <img src={require("../Images/footer_logo.PNG")} alt=""></img>
      </div>
      <div className="infor">More</div>
      <div className="infor">More</div>
    </div>
  );
}

export default Footer;
