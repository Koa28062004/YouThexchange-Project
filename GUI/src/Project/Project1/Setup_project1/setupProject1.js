import React, { useState, useEffect } from "react";
import "./setupProject1.css";

export const SetupSubtopic2 = () => {
  useEffect(() => {
    const PilotPr = document.querySelector(".Author_img ");
    const Btnsub2 = document.querySelectorAll(".name_teammate .fa-circle-info");
    const Img_subtopic = document.querySelector(
      ".Author_img .gallery_project1 img"
    );
    Btnsub2.forEach((btn, index) => {
      if (index === 0 || index === 1 || index === 2) {
        btn.addEventListener("click", () => {
          setTimeout(() => {
            PilotPr.style.display = "flex";
          }, 100);
          setTimeout(() => {
            Img_subtopic.style.transform = "scale(1)";
          }, 150);
        });
      }
    });
  }, []);
};
const Project = ({ currentImageType }) => {
  const Linh = "Linh.png";
  const Rashi = "Rashi.png";
  const [currentImageArray, setCurrentImageArray] = useState(Linh);

  /*The teammate image will change when there has been a change in the currentImageType */
  useEffect(() => {
    if (currentImageType === "Linh") {
      setCurrentImageArray(Linh);
    } else if (currentImageType === "Rashi") {
      setCurrentImageArray(Rashi);
    }
  }, [currentImageType]);

  const handleCloseClick = () => {
    const PilotPr = document.querySelector(".Author_img ");
    const Img_subtopic = document.querySelector(
      ".Author_img .gallery_project1 img"
    );
    Img_subtopic.style.transform = "scale(0.2)";
    setTimeout(() => {
      PilotPr.style.display = "none";
    }, 300);
  };

  return (
    <div className="Author_img">
      <div className="close_btn">
        <i className="fa-solid fa-xmark" onClick={handleCloseClick}></i>
      </div>
      <div className="gallery_project1">
        <div className="slides_project1">
          <img src={require(`../img/${currentImageArray}`)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
