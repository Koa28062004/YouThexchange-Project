import { useEffect } from "react";

function SetUpMenu() {
  useEffect(() => {
    const Menu = document.querySelector(".Menu_PilotProgram");
    const Header = document.querySelector(".Menu_PilotProgram .header")
    const Right = document.querySelector(".Menu_PilotProgram .header .fa-arrow-right"); // Fixed typo here: "documen" to "document"
    const Left= document.querySelector(".Menu_PilotProgram .header .fa-arrow-left");
    Left.addEventListener("click",()=> {
        Menu.style.marginLeft="85%";
        Left.style.display="none";
        Header.style.marginRight="-20%";
    })
    Right.addEventListener("click", () => {
        Menu.style.marginLeft="100%";
        Left.style.display="flex";
        Header.style.marginRight="17%";
    });
  }, []); // Empty dependency array means the effect runs only once, like componentDidMount
}

export default SetUpMenu;
