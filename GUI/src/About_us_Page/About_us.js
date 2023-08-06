import React from "react";
import Tool from "../Tool/Tool";
import "./About_us.css"

function About_us(){
    return(
        <div>
            <h1>About Us</h1>
            <Tool></Tool>
            <div className="About_us">
                <div className="About_us_main">
                    <div className="head_about_us">
                        <img src={require("../Homepage/Images/logo_youth_exchange.png")} alt=""></img>
                        <span className="Tag">Project-Based Cultural Exchange Program</span>
                    </div>
                    <div className="content_about_us">
                        <h4>1. Overview of the Organization</h4>
                        <br></br>
                        <p>The YouThexchange program is dedicated to running a project-based program 
                            that brings together students from different countries and backgrounds to develop an integrated 
                            understanding of worldly problems. We believe in the power of collaboration, critical thinking hence, 
                            our project partners seek to create and develop innovative solutions to address global challenges.
                        </p>
                        <br></br>
                        <h4>2. Our Past Projects </h4>
                        <br></br>
                        <p><strong>“Pilot Program”</strong></p>
                        <br></br>
                        <p>Number of participants: 8 high school students from Vietnam and Thailand 
                            Length of program: 21/06/2023 → 21/07/2023
                        </p>
                        <br></br>
                        <p>In our pilot program, we organized an intensive three-week project that consisted of 5 seminars
                            including regular meetings with dedicated advisors and team meetings. These advisors played a 
                            crucial role in guiding the student groups as they delved deeply into their chosen topics of 
                            biology, business, physics, and psychology. Through a collaborative learning experience, participants 
                            conducted extensive research, engaged in thought-provoking discussions in seminars, and developed 
                            comprehensive campaigns to gain and showcase their understanding of the identified problems through 
                            a detailed presentation.Their presentations were a testament to their hard work, dedication, and the 
                            effectiveness of the project-based approach in fostering meaningful learning experiences.
                        </p>
                        <br></br>
                        <ul>
                            <li>Beyond the tangible outcomes, the pilot program also created lasting connections among participants 
                                from different countries. By interacting closely with individuals from diverse backgrounds, students 
                                developed a deeper appreciation for cultural diversity, and established valuable networks for future 
                                collaborations and cross-cultural exchange.
                            </li>
                            <li>The pilot program was a significant success, showcasing the potential of our project-based approach.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default About_us;