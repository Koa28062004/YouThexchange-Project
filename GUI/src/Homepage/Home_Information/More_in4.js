import React from "react";
import "./More_in4.css";

const Contact = [
  {
    mess: "Facebook",
    class:"F",
    link: "https://www.facebook.com/profile.php?id=100094353529762&mibextid=LQQJ4d",
    idclass: "fa-brands fa-facebook"
  },
  {
    mess: "Instagram",
    class:"I",
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
            <i class="fa-regular fa-circle-play"></i> Videos
            </div>
        </button>
        <button className="btn_moreinf">
            Contact
            <div className="contact">
            {Contact.map((brand) => (
                <a href={brand.link} className={brand.class}>
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
