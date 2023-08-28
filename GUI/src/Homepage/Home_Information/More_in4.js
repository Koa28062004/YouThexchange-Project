import React from "react";
import { Link } from "react-router-dom";
import "./More_in4.css";
const Project = [
  { 
    mess: "Videos",
    classname: "videos",
    link: "#",
    idclass:"fa-regular fa-circle-play"
  }
]
const Contact = [
  {
    mess: "Facebook",
    classname:"F",
    link: "https://www.facebook.com/profile.php?id=100094353529762&mibextid=LQQJ4d",
    idclass: "fa-brands fa-facebook"
  },
  {
    mess: "Instagram",
    classname:"I",
    link: "https://www.instagram.com/youthexchange.project/",
    idclass: "fa-brands fa-instagram"
  }
];

function More() {
  const handleregister=()=>{
    alert("We are not currently recruiting members. Please check out our current projects.");
  }
  return (
    <div className="more_inf">
        <button className="btn_moreinf" onClick={handleregister}>How to register</button>
        <button className="btn_moreinf">
            Projects
            <div className="Project">
            {Project.map((item) => (
                <Link key={item.mess} to={item.link} className={item.classname}>
                  <i className={item.idclass} ></i>
                  <span className="mess">{item.mess}</span>
                </Link>
            ))}
            </div>
        </button>
        <button className="btn_moreinf">
            Contact
            <div className="contact">
            {Contact.map((brand) => (
                <a key={brand.mess} href={brand.link} className={brand.classname}>
                    <i className={brand.idclass} ></i>
                <span className="mess">{brand.mess}</span>
                </a>
            ))}
            </div>
        </button>
    </div>
  );
}

export default More;
