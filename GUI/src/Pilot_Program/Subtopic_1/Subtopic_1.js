import React from "react";
import Tool from "../../Tool/Tool";
import Footer from "../../Footer/Footer";
import SDGs_logo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import "./Subtopic_1.css"
import SetUpSubtopic1 from "./Set_up_subtopic1";
const header_content=[
    {
        name:"1. Purpose of the Program",
        id:"#1"
    },
    {
        name:"2. Process of the Program",
        id:"#2"
    }
]
const Subtopic_1=()=>{
    return(
        <div className="body_subtopic1">
            <h1>Pilot Program</h1>
            <Tool />
            <SDGs_logo />
            <div className="Roll">
                <div className="bar"><i class="fa-solid fa-bars"></i></div>
                <div className="contain">
                {header_content.map((header) => (
                        <a key={header.name} href={header.id}>{header.name}</a>
                    ))}
                </div>
            </div>
            <div className="subtopic_1">
                <div className="header_subtopic_1">
                    <img src={ require ("../../Homepage/Images/logo.png")} alt=""></img>
                    <h2>Pilot Program: An Overview</h2>
                </div>
                <div className="main_subtopic_1">
                    <h4 id="1"><strong>Purpose of the Program</strong></h4>
                    <img src={ require ("../Images/picture_1.png")}></img>

                    <p>Our Pilot Program focuses on the <strong>“Facilitate cross-culture projects”</strong> aspect of the operation. 
                        In these 2 weeks, you will be paired up with a partner who shares the same subject interest as you. 
                        Together, this partnership will delve deeply into a societal problem with reference to the 
                        Sustainable Development Goals (SDGs) as a guiding star. Because each partner comes from a vastly 
                        different environment - educationally, culturally, etc… - you offer each other different insights, 
                        approaches to identifying and solving problems, and ways of thinking. Diversity in thinking is key to 
                        finding an undiscovered gap in society or innovating a new way to address an old problem.
                    </p>
                    <br></br>
                    <p>The purpose of this cultural exchange is to find innovative ideas in the space between your expertise. Thus, 
                        that should be the attitude adopted by everyone throughout this pilot program.
                    </p>
                    <br></br>
                    <p><em>*Note: Each party is referred to as a project partner. </em></p>
                    <br></br>
                    <h4 id="2"><strong>Process of the Program</strong></h4>
                </div>
            </div>
            <Footer />
            <SetUpSubtopic1 />
        </div>
    )
}

export default Subtopic_1; 