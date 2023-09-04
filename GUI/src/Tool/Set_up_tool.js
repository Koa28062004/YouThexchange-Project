import { useEffect } from "react";

function SetUpTool() {
  useEffect(() => {
    const i_dropdown = document.querySelectorAll(".tool .i_dropdown");
    i_dropdown.forEach((i_dropdown) => {
      let x = 0;

      const i_dropdown_content = i_dropdown.querySelector(
        ".tool .i_dropdown-content"
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


    const Search_mobile = document.querySelector(".search_mobi .ser");
    const input_mobile = document.querySelector(".search_mobi .input");
    
    
    document.addEventListener("click", (event) => {
      const clickedElement = event.target;
      if (clickedElement !== Search_mobile && clickedElement !== input_mobile) {
        input_mobile.style.display = "none";
        Search_mobile.style.marginLeft="70%"
      }
      else{input_mobile.style.display = "flex";
      Search_mobile.style.marginLeft="0%"}
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


    const i_dropdown_mobie = document.querySelectorAll(".tool_mobi .i_dropdown");
    i_dropdown_mobie.forEach((i_dropdown) => {
      let x = 0;

      const i_dropdown_content = i_dropdown.querySelector(
        ".tool_mobi .i_dropdown-content"
      );

      i_dropdown.addEventListener("click", () => {
        if (x === 0) {
          i_dropdown.style.background = "rgb(0, 0, 0)";
          i_dropdown.style.color = "rgb(255,255, 255)";
          i_dropdown_content.style.display = "block";
          x++;
        } else {
          i_dropdown.style.color = "rgb(0, 0, 0)";
          i_dropdown.style.background = "rgb(255, 255, 255)";
          i_dropdown_content.style.display = "none";
          x = 0;
        }
      });
    });
  }, []);
}

export default SetUpTool;
