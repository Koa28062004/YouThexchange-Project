import React ,{useState}from "react";
import Tool from "../Tool/Tool";
import Footer from "../Footer/Footer";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import "./Project_main.css";


const ProjectData=[
    {
        Project:"1",
        name:"SUSTAINABILITY & BUSINESSES",
        img:"./Img/picture1.png",
        author:"Rashi and Linh"
    },
    {
        Project:"2",
        name:"GENDER INEQUALITY",
        img:"./Img/picture2.png",
        author:"In and Minh"
    },
    {
        Project:"3",
        name:"WATER FILTRATION SYSTEM MODEL",
        img:"./Img/picture3.png",
        author:"Nancy and Padma"
    },
    {
        Project:"4",
        name:"GENETIC ENGINEERING",
        img:"./Img/picture4.png",
        author:"Kacy and Janya"
    }
   
];

const ProjectMain=() =>{
    const [showPDF, setShowPDF] = useState(false);

    const togglePDF = () => {
      setShowPDF(!showPDF);
    };
    return(
        <div className="ProjectMain_body">
            {showPDF && (
                <iframe
                className="pdf_project"
                src={require("./Project1/Infographic - SHEIN.pdf")}
                width="100%"
                height="1000px"
                title="PDF Viewer"
                />
            )}
            <Tool />
            <SDGslogo />
            <h1>Project</h1>
            <div className="ProjectMain">
                {ProjectData.map((project, index) => {
                    return (
                        <div className="box_project" key={index}>
                            <div className="box_img">
                                <img src={require(`${project.img}`)} alt=""></img>
                            </div>
                            <div className="box_main">
                                <p>Project {project.Project}:</p>
                                <br></br>
                                <p className="Name_Project">{project.name}</p>
                                <div className="box_author">
                                    <p>Author: <span className="Name_Author">{project.author}</span></p>
                                </div>
                                <p to="/" className="btn_project" onClick={togglePDF}>Details</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer />
           
            
            {showPDF && <button className="btn_toggle_pdf" title="Close" onClick={togglePDF}>
                <i class="fa-solid fa-xmark"></i>
            </button>
            }
        </div>
    )
}

export default ProjectMain;