import React, { useState, useEffect } from "react";
import "./setupVideos.css";

const currentVideosArray = [
  // Meow1
  "https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview",
  // Meow2
  "https://drive.google.com/file/d/1O1JeMbe5lWVs1H7b8IeW2K1GAYcmsY5i/preview",
];

export const SetupVideos = () => {   /* Nơi để chỉnh cho video xuất hiện , m tự chỉnh lại className để nó chạy*/
  useEffect(() => {
    const PilotPr = document.querySelector(".Business_program ");
    const Btnsub2 = document.querySelectorAll(".Videos .btnn");
    const Img_subtopic = document.querySelector(".Business_program .gallery_subtopic2 iframe")
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

const ProjectVideosSetUp = ({ currentID }) => {
  const [currentVideosIndex, setCurrentVideosIndex] = useState(0);

  useEffect(() => {/* Place to change video display */
    if (currentID === "1") {
      setCurrentVideosIndex(0);
    } else if (currentID === "2") {
      setCurrentVideosIndex(1);
    } else if (currentID === "3") {
      setCurrentVideosIndex(2);
    }
  }, [currentID]);

  const handleCloseClick = () => {  /*handle close button */
    const PilotPr = document.querySelector(".Business_program ");
    const Img_subtopic = document.querySelector(".Business_program .gallery_subtopic2 iframe");
    Img_subtopic.style.transform = "scale(0)";
    setTimeout(() => {
      PilotPr.style.display = "none";
    }, 200);
  };

  const handleNextClick = () => {
    if (currentVideosIndex < currentVideosArray.length - 1) {
      setCurrentVideosIndex(currentVideosIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentVideosIndex > 0) {
      setCurrentVideosIndex(currentVideosIndex - 1);
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
          <iframe
            src={currentVideosArray[currentVideosIndex]}
            width = "100%"
            height="100%"
            allow="autoplay"
            title={`Video - ${currentVideosIndex}`}
            className="driveLink"
          ></iframe>
        </div>
        <i className="fa-solid fa-chevron-right" onClick={handleNextClick}></i>
      </div>

    </div>
  );
};

export default ProjectVideosSetUp;