import React from "react";
import SetUpTool from "./Set_up_tool";
import "./Tool.css"

const programData = [
  {
    name: "Members",
    details: ["Member 1", "Member 2","More..."],
  },
  {
    name: "Pilot Program",
    details: ["Program 1", "Program 2","More..."],
  },
  {
    name: "Project",
    details: ["Project 1", "Project 2","More..."],
  },
];

function DropdownContent({ title }) {
  if (title === "Event")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
  if (title === "Competition")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
  if (title === "Program")
    return (
      <div className="dropdown-content">
        {programData.map((program, index) => (
          <div key={index}>
            <div className="i_dropdown">
              <div className="i_dropdownname">{program.name}</div>
              <div className="i_dropdown-content">
                {program.details.map((item, itemIndex) => (
                  <div key={itemIndex} className="i_content">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  if (title === "About Us")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
  if (title === "Project Partners")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
}

function Dropdown({ title }) {
  return (
    <div className="dropdown">
      {title}
      <DropdownContent title={title} />
    </div>
  );
}

function Navigation() {
  return (
    <div className="nav">
      <img className="logo" alt="" src={require("../Homepage/Images/logo.png")} />
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
      <SetUpTool />
    </div>
  );
}

export default Tool;
