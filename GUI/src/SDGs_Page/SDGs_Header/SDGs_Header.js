import React from 'react';
import "../SDGs.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo-title">
          <a href="https://en.wikipedia.org/wiki/Sustainable_Development_Goals">
            <img src="Pictures/logo.jpg" alt="" />
          </a>
          <h1>THE 17 GOALS</h1>
        </div>
        <div className="header-details">
          <h2>
            <span className="larger">169</span> <br />
            <span className="smaller">Targets</span>
          </h2>
          {/* Add other header details here */}
        </div>
      </div>
    </div>
  );
};

export default Header;
