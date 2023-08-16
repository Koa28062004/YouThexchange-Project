import React from "react";
import Tool from "../../Tool/Tool";
import Footer from "../../Footer/Footer";
import SDGs_logo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import MenuPilotProgram from "../Menu";
import "./Subtopic_2.css"

const Pilot_ProgramData = [
    {
        name: "Business",
        details: [
            {
                img: "./Images/picture1.png"
            }
        ]
    },
    {
        name: "Psychology",
        details: [
            {
                img: "./Images/picture2.png"
            }
        ]
    },
    {
        name: "Biology",
        details: [
            {
                img: "./Images/picture3.png"
            }
        ]
    },
];

const Subtopic_2 = () => {
    return (
        <div className="body_subtopic2">
            <h1>Pilot Program</h1>
            <Tool />
            <SDGs_logo />
            <MenuPilotProgram />
            <div className="Main_subtopic2">
                <div className="Subtopic2">
                    <span className="h2">Product outcomes</span>
                    <br />
                    <h3>Subtopic of subtopic</h3>
                    <div className="Menu_subtopicProject">
                        {Pilot_ProgramData.map((project, index) => (
                            <div key={index} className="subtopicProject">
                                <h4>{project.name}</h4>
                                {project.details.map((box, boxIndex) => (
                                    <div key={boxIndex} className="container">
                                        <div className="box_subtopic">
                                            <img src={require(`${box.img}`)} alt={`Project ${index} Image`} />
                                            <button className="btn">Details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};



export default Subtopic_2;