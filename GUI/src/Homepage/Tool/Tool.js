import React from "react";

function DropdownContent() {
  return (
    <div className="dropdown-content">
      <div className="content">
        <a href="https://www.youtube.com/">youtube</a>
      </div>
    </div>
  );
}

function Dropdown({ title }) {
  return (
    <div className="dropdown">
      {title}
      <DropdownContent />
    </div>
  );
}

function Navigation() {
  return (
    <div className="nav">
      <img className="logo" alt="hi" src={require("../../Images/logo.png")} />
      <div className="ull">
        <Dropdown title="Event" />
        <Dropdown title="Competition" />
        <Dropdown title="Program" />
        <Dropdown title="About Us" />
        <Dropdown title="Project Partners" />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <input className="input" type="search" name="" placeholder="Search..." />
      <button className="ser">Search</button>
    </div>
  );
}

function Tool() {
  return (
    <div className="tool">
      <Navigation />
      <Search />
    </div>
  );
}

export default Tool;