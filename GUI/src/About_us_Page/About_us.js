import React from "react";
import Tool from "../Homepage/Home_Tool/Tool";


function About_us(){
    return(
        <div>
            <h1>About Us</h1>
            <Tool></Tool>
            <div>
                <img src={require("../Images/logo_youth_exchange.png")} alt=""></img>
                <span>Project-Based Cultural Exchange Program</span>
            </div>
                
        </div>
    )
}

export default About_us;