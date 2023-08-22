import React from "react";
import Tool from "../Tool/Tool";
import Footer from "../Footer/Footer";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";

const ProjectMain=() =>{
    return(
        <div className="ProjectMain_body">
            <Tool />
            <SDGslogo />
            <div className="ProjectMain">
                
            </div>
            <Footer />
        </div>
    )
}

export default ProjectMain;