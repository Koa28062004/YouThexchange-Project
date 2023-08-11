import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import SetUpMenu from "./Set_up_menu";

const MenuPilotProgram= () =>{
    return(
        <div className="Menu_PilotProgram">
            <div className="header">
                <i class="fa-solid fa-arrow-left"></i>
                Menu Pilot Program
                <i class="fa-solid fa-arrow-right"></i></div>
            <ul>
                <li><Link to="/Pilot_Program/Subtopic_1"><i className="fa-solid fa-circle"></i>Subtopic 1:
                <br></br> <p>Who are we</p>
                </Link>
                </li>
                <li><Link to="/Pilot_Program/Subtopic_2"><i className="fa-solid fa-circle"></i>Subtopic 2:
                <br></br> <p>Product outcomes</p>
                </Link>
                </li>
            </ul>
            <SetUpMenu />
        </div>
    )
}

export default MenuPilotProgram;