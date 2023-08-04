import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo-title">
          <a href="https://en.wikipedia.org/wiki/Sustainable_Development_Goals">
            <img src="../Pictures/logo.jpg" alt="" />
          </a>
          <h1>THE 17 GOALS</h1>
        </div>
        <div className="header-details">
          <h2>
            <span className="larger">169</span> <br />
            <span className="smaller">Targets</span>
          </h2>
          <h2>
            <span className="larger">3847</span> <br />
            <span className="smaller">Events</span>
          </h2>
          <h2>
            <span className="larger">1344</span> <br />
            <span className="smaller">Publications</span>
          </h2>
          <h2>
            <span className="larger">7593</span> <br />
            <span className="smaller">Actions</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

