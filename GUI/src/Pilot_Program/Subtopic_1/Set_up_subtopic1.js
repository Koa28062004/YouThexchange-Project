import { useEffect } from "react";

function SetUpSubtopic1() {
  useEffect(() => {
    const Roll = document.querySelector(".Roll");
    const Bar = document.querySelector(".Roll .bar"); // Fixed typo here: "documen" to "document"
    let x = 0;
    
    Bar.addEventListener("click", () => {
      if (x === 0) {
        Roll.style.transform = "translateX(0)";
        x++;
      } else {
        Roll.style.transform = "translateX(-100%)";
        x = 0;
      }
    });
  }, []); // Empty dependency array means the effect runs only once, like componentDidMount
}

export default SetUpSubtopic1;
