import React from "react";
import Tool from "../../Tool/Tool";
const Subtopic_1=()=>{
    return(
        <div className="body_subtopic1">
            <h1>Pilot Program</h1>
            <Tool />
            <div className="subtopic_1">
                <div className="header_subtopic_1">
                    <img src={ require ("../../Homepage/Images/logo.png")} alt=""></img>
                    <h3>Pilot Program: An Overview</h3>
                </div>
                <div className="main_subtopic_1">
                    <p><strong>Purpose of the Program</strong></p>
                    <img src={ require ("../Images/picture_1.png")}></img>
                </div>
            </div>
        </div>
    )
}

export default Subtopic_1; 