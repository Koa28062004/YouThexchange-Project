import React, { useState, useEffect } from "react";
import Tool, { Tool_mobile } from "../../Tool/Tool";
import Footer from "../../Footer/Footer";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import PilotProgram, { SetupSubtopic2 } from "./Subtopic/PilotProgram";
import MenuPilotProgram from "../Menu";
import "./Subtopic_2.css";
import { Search_mobile } from "../../Tool/Search";

const Pilot_ProgramData = [
    {
        name: "Business",
        details: [
            {
                name: "SUSTAINABILITY & BUSINESSES",
                img: "./Images/picture1.png",
                link: "https://drive.google.com/file/d/1Cz-8X2Q96YzSyqmH5mw8RtbU1n9dr0qD/view",
            },
        ],
    },
    {
        name: "Psychology",
        details: [
            {
                name: "Gender inequality",
                img: "./Images/picture2.png",
                link: "https://docs.google.com/presentation/d/1BrhDywUaRLechxFLz0rpQnRcINyicnaoaBUVaRsKeT4/edit?usp=drive_link",
            },
        ],
    },
    {
        name: "Biology",
        details: [
            {
                name: "Genetic Engineering",
                img: "./Images/picture3.png",
                link: "https://drive.google.com/file/d/1fjA37Kbx1FXYT1mdjwPRt1WadOtx6pQY/view?usp=drive_link",
            },
        ],
    },
];

const Subtopic2 = () => {
    const [currentImageType, setCurrentImageType] = useState("Business");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 880);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 880);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="body_subtopic2">
            <Tool />
            <Tool_mobile />
            <Search_mobile />
            <SDGslogo />
            <MenuPilotProgram />
            <div className="Main_subtopic2">
                <div className="Subtopic2">
                    <div className="header-sub2">
                        <h2 className="productOutcome">Product outcomes</h2>
                    </div>
                    <div className="Menu_subtopicProject">
                        <div className="subtopicProject">
                            {Pilot_ProgramData.map((project, index) => (
                                <div key={index} className="container">
                                    <h4>{project.name}</h4>
                                    {project.details.map((box, boxIndex) => (
                                        <div className="box_subtopic" key={boxIndex}>
                                            <img src={require(`${box.img}`)} alt="" />
                                            <span>{box.name}</span>
                                            {isMobile ? (
                                                <a href={box.link} target="_blank"  rel="noopener noreferrer">
                                                    <button key={boxIndex} className="btn">
                                                        Details
                                                    </button>
                                                </a>
                                            ) : (
                                                <button
                                                    key={boxIndex}
                                                    className="btn"
                                                    onClick={() => setCurrentImageType(project.name)}
                                                >
                                                    Details
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isMobile ? null : (
                <>
                    <PilotProgram currentImageType={currentImageType} />
                    <SetupSubtopic2 />
                </>
            )}
            <Footer />
        </div>
    );
};

export default Subtopic2;
