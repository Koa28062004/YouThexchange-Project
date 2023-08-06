import React from "react";
import SetUpTool from "./Set_up_tool";
import "./Tool.css"
import { Link } from "react-router-dom";
const programData = [
  {
    name: "Members",
    details: [
      {
        name: "Member 1",
        link:"https://www.youtube.com/watch?v=JJrQaev8YRc&list=PLdM751AKK4aPGF32PlA7DlTAT6uP-a-4b&index=29&ab_channel=MuseVi%E1%BB%87tNam"
      }, 
      {
        name:"Member 2",
        link:"#"
      },
      {
        name:"More...",
        link:"#"
      }
    ],
  },
  {
    name: "Members",
    details: [
      {
        name: "Member 1",
        link:"#"
      }, 
      {
        name:"Member 2",
        link:"#"
      },
      {
        name:"More...",
        link:"#"
      }
    ],
  },
  {
    name: "Members",
    details: [
      {
        name: "Member 1",
        link:"#"
      }, 
      {
        name:"Member 2",
        link:"#"
      },
      {
        name:"More...",
        link:"#"
      }
    ]
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
                  <a href={item.link} key={itemIndex} className="i_content">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
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
      <Link to="/" className="logo"><img  alt="" src={require("../Homepage/Images/logo.png")} /></Link>
      <div className="ull">
        <Dropdown title="Event" />
        <Dropdown title="Competition" />
        <Dropdown title="Program" />
        <Link to="/About_us" className="dropdown">About Us</Link>
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
