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
                <li><Link to="/Project_1"><i className="fa-solid fa-circle"></i> Who are we
                </Link>
                </li>
                <li><Link to="/Project_2"><i className="fa-solid fa-circle"></i> Product outcomes
                </Link>
                </li>
                <li><Link to="/Project_1"><i className="fa-solid fa-circle"></i> Meeting Recording
                </Link>
                </li>
            </ul>
            <SetUpMenu />
        </div>
    )
}

export default MenuPilotProgram;