import React, { useState, useEffect } from "react";
import "./PilotProgram.css"

const BusinessImg = [
  "./img/Business/picture1.png",
  "./img/Business/picture2.png",
  "./img/Business/picture3.png",
  "./img/Business/picture4.png",
  "./img/Business/picture5.png",
  "./img/Business/picture6.png",
  "./img/Business/picture7.png",
  "./img/Business/picture8.png",
  "./img/Business/picture9.png",
  "./img/Business/picture10.png",
  "./img/Business/picture11.png",
  "./img/Business/picture12.png",
];
const PsychologyImg = [
  "./img/Psychology/picture1.png",
  "./img/Psychology/picture2.png",
  "./img/Psychology/picture3.png",
  "./img/Psychology/picture4.png",
  "./img/Psychology/picture5.png",
  "./img/Psychology/picture6.png",
  "./img/Psychology/picture7.png",
  "./img/Psychology/picture8.png",
  "./img/Psychology/picture9.png",
];
const BiologyImg = [
  "./img/Biology/picture1.png",
  "./img/Biology/picture2.png",
];
export const SetupSubtopic2 = () => {
  useEffect(() => {
    const PilotPr = document.querySelector(".Business_program ");
    const Btnsub2 = document.querySelectorAll(".subtopicProject .btn");
    const Img_subtopic = document.querySelector(".Business_program .gallery_subtopic2 img")
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

const PilotProgram = ({ currentImageType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageArray, setCurrentImageArray] = useState(BusinessImg);

  useEffect(() => {
    if (currentImageType === "Business") {
      setCurrentImageArray(BusinessImg);
    } else if (currentImageType === "Psychology") {
      setCurrentImageArray(PsychologyImg);
    } else if (currentImageType === "Biology") {
      setCurrentImageArray(BiologyImg);
    }
  }, [currentImageType]);

  const handleCloseClick = () => {
    const PilotPr = document.querySelector(".Business_program ");
    const Img_subtopic = document.querySelector(".Business_program .gallery_subtopic2 img")
    Img_subtopic.style.transform = "scale(0.2)";
    setTimeout(() => {
      PilotPr.style.display = "none";
    }, 300);
    setCurrentImageIndex(0);
  };

  const handleNextClick = () => {
    if (currentImageIndex < currentImageArray.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="Business_program">
      <div className="close_btn">
        <i className="fa-solid fa-xmark" onClick={handleCloseClick}></i>
      </div>
      <div className="gallery_subtopic2">
        <i className="fa-solid fa-chevron-left" onClick={handlePreviousClick}></i>
        <div className="slides_subtopic2">
          <img src={require(`${currentImageArray[currentImageIndex]}`)} alt="" />
        </div>
        <i className="fa-solid fa-chevron-right" onClick={handleNextClick}></i>
      </div>

    </div>
  );
};


export default PilotProgram;