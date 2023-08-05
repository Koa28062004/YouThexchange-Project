import React from "react"
import "./More_in4.css"

function More(){
    return(
    <div className="more_inf">
        <button className="btn_moreinf">How to register</button>
        <button className="btn_moreinf">Projects</button>
        <button className="btn_moreinf">Contact
            <div className="contact">
                <a href="https://www.facebook.com/profile.php?id=100094353529762&mibextid=LQQJ4d">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </button>
    </div>
    )
};

export default More;