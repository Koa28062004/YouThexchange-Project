import React from "react";
import SetUpTool from "./Set_up_tool";
import "./Tool.css"
import { Link } from "react-router-dom";
import Search from "./Search";

const AboutusData= [
  {
    name:"About Us",
    link:"/About_us"
  },
  {
    name:"Core Team",
    link:"/Core_Team"
  }
]
const programData = [
 
  {
    name: "Pilot Program",
    details: [
      {
        name: "Project 1",
        link:"/Project_1"
      }, 
      {
        name:"Project 2",
        link:"/Project_2"
      },
      {
        name:"Project 3",
        link:"/Project_3"
      }
    ],
  },
  {
    name: "Project",
    details: [
      {
        name:"Project",
        link:"/Project"
      },
      {
        name:"Video Project",
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
       <p>Coming soon</p> 
      </div>
    );
  if (title === "Program")
    return (
      <div className="dropdown-content">
        {programData.map((program, index) => (
          <div key={index}>
            <div className="i_dropdown">
              <div className="i_dropdownname">{program.name} <i class="fa-solid fa-chevron-down"></i></div>
              <div className="i_dropdown-content">
                {program.details.map((item, itemIndex) => (
                  <Link to={item.link} key={itemIndex} className="i_content">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  if (title === "About Us")
    return(
      <div className="dropdown-content">
        {AboutusData.map((program, index) => (
          <div key={index}>
            <Link to={program.link}>{program.name}</Link>
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
        <Dropdown title="About Us" />
        <Dropdown title="Project Partners" />
      </div>
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


export function Tool_mobile() {
  return(
    <div className="tool_mobi">
      <div className="bar"><i class="fa-solid fa-bars"></i></div>
                <div className="contain">
              <Link to="/"><Dropdown title="Home"></Dropdown></Link>
              <Dropdown title="Event" />
              <Dropdown title="Competition" />
              <Dropdown title="Program" />
              <Dropdown title="About Us" />
              <Dropdown title="Project Partners" />
              <Link to="/SDGs"><Dropdown title="SDGs"></Dropdown></Link>
      </div>
    </div>
  )
}

export default Tool;