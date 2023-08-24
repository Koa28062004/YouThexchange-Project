import React,{useState,useEffect} from "react";
import "./setupProject1.css"



const PilotProgram = ({ currentImageType }) => {
    const Linh = ["../img/Linh.png"];
    const [currentImageArray, setCurrentImageArray] = useState(Linh);
  
    useEffect(() => {
       if (currentImageType === "Linh") {
        setCurrentImageArray(Linh);
      } 
    }, [currentImageType]);
  
    const handleCloseClick = () => {
        const PilotPr = document.querySelector(".Name_Project ");
        const Img_subtopic= document.querySelector(".Name_Project .gallery_subtopic2 img")
        Img_subtopic.style.transform = "scale(0.2)";
        setTimeout(() => {
            PilotPr.style.display = "none";
          }, 300);
    };


    return (
        <div className="Name_Project">
            <div className="close_btn">
                <i className="fa-solid fa-xmark" onClick={handleCloseClick}></i>
            </div>
            <div className="gallery_subtopic2">
                <div className="slides_subtopic2">
                    <img src={require(`${currentImageArray[0]}`)} alt="" />
                </div>
            </div>
            
        </div>
    );
};


export default PilotProgram;