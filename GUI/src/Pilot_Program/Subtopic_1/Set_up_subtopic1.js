import { useEffect } from "react";

function SetUpSubtopic1() {
  useEffect(() => {
    const Roll = document.querySelector(".Roll");
    const Bar = document.querySelector(".Roll .bar"); 
    let x = 1;
    
    Bar.addEventListener("click", () => {
      if (x === 0) {
        Roll.style.transform = "translateX(0)";
        x++;
        Bar.style.width="100%";
      } else {
        Roll.style.transform = "translateX(-100%)";
        x = 0;
        Bar.style.width="120%";
      }
    });
  }, []); // Empty dependency array means the effect runs only once, like componentDidMount
}

export default SetUpSubtopic1;
