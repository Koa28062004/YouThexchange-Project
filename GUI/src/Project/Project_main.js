import React from "react";
import Tool, { Tool_mobile } from "../Tool/Tool";
import Footer from "../Footer/Footer";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import "./Project_main.css";
import { Link } from "react-router-dom";
import { Search_mobile } from "../Tool/Search";

const ProjectData = [
  {
    Project: "1",
    name: "SUSTAINABILITY & BUSINESSES",
    img: "./Img/picture1.png",
    link: "/Project1",
    author: "Rashi and Linh",
  },
  {
    Project: "2",
    name: "GENDER INEQUALITY",
    img: "./Img/picture2.png",
    link: "/Project2",
    author: "In and Minh",
  },
  {
    Project: "3",
    name: "WATER FILTRATION SYSTEM MODEL",
    img: "./Img/picture3.png",
    link: "/Project3",
    author: "Nancy and Padma",
  },
  {
    Project: "4",
    name: "GENETIC ENGINEERING",
    img: "./Img/picture4.png",
    link: "/Project4",
    author: "Kacy and Janya",
  },
];

const ProjectMain = () => {
  return (
    <div className="ProjectMain_body">
      <Tool />
      <Tool_mobile />
      <Search_mobile />
      <SDGslogo />
      <h1>Project</h1>
      <div className="ProjectMain">
        {ProjectData.map((project, index) => {
          return (
            <div className="box_project" key={index}>
              <div className="box_img">
                <img src={require(`${project.img}`)} alt=""></img>
              </div>
              <div className="box_main">
                <p>Project {project.Project}:</p>
                <br></br>
                <p className="Name_Project">{project.name}</p>
                <div className="box_author">
                  <p>
                    Author:{" "}
                    <span className="Name_Author">{project.author}</span>
                  </p>
                </div>
                <Link to={project.link} className="btn_project">
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectMain;
