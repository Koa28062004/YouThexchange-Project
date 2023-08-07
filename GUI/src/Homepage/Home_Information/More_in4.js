import React from "react";
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
  return (
    <div className="more_inf">
        <button className="btn_moreinf">How to register</button>
        <button className="btn_moreinf">
            Projects
            <div className="Project">
            {Project.map((item) => (
                <a key={item.mess} href={item.link} className={item.classname}>
                    <i className={item.idclass} ></i>
                <span className="mess">{item.mess}</span>
                </a>
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
