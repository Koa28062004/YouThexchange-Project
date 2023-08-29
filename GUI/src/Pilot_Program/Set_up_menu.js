import { useEffect } from "react";

function SetUpMenu() {
  useEffect(() => {
    const Menu = document.querySelector(".Menu_PilotProgram");
    const Header = document.querySelector(".Menu_PilotProgram .header")
    const Right = document.querySelector(".Menu_PilotProgram .header .fa-arrow-right");
    const Left= document.querySelector(".Menu_PilotProgram .header .fa-arrow-left");
    Left.addEventListener("click",()=> {
        Menu.style.right="0";
        Left.style.display="none";
        Header.style.marginRight="-20%";
    })
    Right.addEventListener("click", () => {
        Menu.style.right="unset";
        Left.style.display="flex";
        Header.style.marginRight="17%";
    });
  }, []); 
}

export default SetUpMenu;
