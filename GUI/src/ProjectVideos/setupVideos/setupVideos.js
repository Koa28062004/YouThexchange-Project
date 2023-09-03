import React,{useState,useEffect}from "react";




export const SetupSubtopic2 = () => {   /* Nơi để chỉnh cho video xuất hiện , m tự chỉnh lại className để nó chạy*/ 
    useEffect(() => {
        const PilotPr = document.querySelector(".Business_program ");
        const Btnsub2 = document.querySelectorAll(".subtopicProject .btn");
        const Img_subtopic= document.querySelector(".Business_program .gallery_subtopic2 img")
        Btnsub2.forEach((btn, index) => {
            if (index === 0||index === 1 || index === 2) {
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

const Videos_setup = ({ currentImageType }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const [currentImageArray, setCurrentImageArray] = useState(/* Name video */);  /* Video want to display*/
  
    useEffect(() => {/* Place to change video display */
      if (currentImageType === "Business") {
        setCurrentImageArray(BusinessImg);
      } else if (currentImageType === "Psychology") {
        setCurrentImageArray(PsychologyImg);
      } else if (currentImageType === "Biology") {
        setCurrentImageArray(BiologyImg);
      }
    }, [currentImageType]);
  
    const handleCloseClick = () => {  /*handle close button */
        const PilotPr = document.querySelector(".Business_program ");
        const Img_subtopic= document.querySelector(".Business_program .gallery_subtopic2 img")
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
                <div className="slides_subtopic2" /*Place to set video */>                                
                </div>
                <i className="fa-solid fa-chevron-right" onClick={handleNextClick}></i>
            </div>
            
        </div>
    );
};