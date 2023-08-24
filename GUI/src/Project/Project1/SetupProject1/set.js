import  { useEffect} from "react";


const SetupSubtopic2 = () => {
    useEffect(() => {
        const PilotPr = document.querySelector(".Name_Project ");
        const Btnsub2 = document.querySelectorAll(".name_teammate .fa-circle-info");
        const Img_subtopic= document.querySelector(".Name_Project .gallery_subtopic2 img")
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

export default SetupSubtopic2;
