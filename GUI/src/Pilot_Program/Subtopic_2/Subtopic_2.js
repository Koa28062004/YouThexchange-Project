import React from "react";
import Tool from "../../Tool/Tool";
import Footer from "../../Footer/Footer";
import SDGs_logo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import MenuPilotProgram from "../Menu";
const Subtopic_2=()=>{
    return(
        <div className="body_subtopic2">
            <h1>Pilot Program</h1>
            <Tool />
            <SDGs_logo />
            <MenuPilotProgram />
            <Footer />
        </div>
    )
}        

export default Subtopic_2;