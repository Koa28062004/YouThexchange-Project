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
                name:"SUSTAINABILITY",
                img: "./Images/picture1.png",
                link:"https://drive.google.com/file/d/1Cz-8X2Q96YzSyqmH5mw8RtbU1n9dr0qD/view"
            }
        ]
    },
    {
        name: "Psychology",
        details: [
            {   
                name:"Gender inequality",
                img: "./Images/picture2.png",
                link:"https://docs.google.com/presentation/d/1BrhDywUaRLechxFLz0rpQnRcINyicnaoaBUVaRsKeT4/edit?usp=drive_link"
            }
        ]
    },
    {
        name: "Biology",
        details: [
            {
                name:"Genetic Engineering",
                img: "./Images/picture3.png",
                link:"https://drive.google.com/file/d/1fjA37Kbx1FXYT1mdjwPRt1WadOtx6pQY/view?usp=drive_link"
            }
        ]
    },
];

const Subtopic_2 = () => {
    return (
        <div className="body_subtopic2">
            <Tool />
            <SDGs_logo />
            <MenuPilotProgram />
            <div className="Main_subtopic2">
                <div className="Subtopic2">
                    <div className="h2">
                        <h2>Product outcomes</h2>
                    </div>
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
                                            <span>Name: {box.name}</span>
                                            <a href={box.link}><button className="btn">Details</button></a>
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