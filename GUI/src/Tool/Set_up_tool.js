import { useEffect } from "react";

function SetUpTool() {
  useEffect(() => {
    const i_dropdown = document.querySelectorAll(".i_dropdown");
    i_dropdown.forEach((i_dropdown) => {
      let x = 0;

      const i_dropdown_content = i_dropdown.querySelector(
        ".i_dropdown-content"
      );

      i_dropdown.addEventListener("click", () => {
        if (x === 0) {
          i_dropdown.style.background = "rgb(63, 46, 62)";
          i_dropdown.style.color = "rgb(239, 225, 209)";
          i_dropdown_content.style.display = "block";
          x++;
        } else {
          i_dropdown.style.color = "rgb(63, 46, 62)";
          i_dropdown.style.background = "rgb(239, 225, 209)";
          i_dropdown_content.style.display = "none";
          x = 0;
        }
      });
    });


    let y=0;
    const bar = document.querySelector(".tool_mobi .bar");
    const tool_mobi = document.querySelector(".tool_mobi");
    bar.addEventListener("click",() =>{
      if(y===0){
        tool_mobi.style.marginLeft=0;
        bar.style.width="105%";
        y++;
      }
      else{
        tool_mobi.style.marginLeft="-70%";
      bar.style.width="115%";
      y=0;
      }
    })
  }, []);
}

export default SetUpTool;
