import  { useEffect} from "react";


const SetupSubtopic2 = () => {
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

export default SetupSubtopic2;
