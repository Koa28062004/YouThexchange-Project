import React from "react";
import Tool from "../../Tool/Tool";
import Footer from "../../Footer/Footer";
import SDGs_logo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import MenuPilotProgram from "../Menu";
import "./Subtopic_2.css"
const Subtopic_2=()=>{
    return(
        <div className="body_subtopic2">
            <h1>Pilot Program</h1>
            <Tool />
            <SDGs_logo />
            <MenuPilotProgram />
            <div className="Main_subtopic2">
            <div className="Subtopic2">
                <h2>Product outcomes</h2>
                <br></br>
                <h3>Subtopic of subtopic </h3>
                <div className="Menu_subtopicProject">
                    <div className="subtopicProject">
                        <h4>Bussines</h4>
                        <div className="container">
                            <div className="box_subtopic">
                                <img src={require ("./Images/picture1.png")}></img>
                            </div>
                        </div>
                    </div>
                    <div className="subtopicProject">
                        <h4> Psychology</h4>
                        <div className="container">
                            <div className="box_subtopic">
                                <img src={require ("./Images/picture2.png")}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}        

export default Subtopic_2;