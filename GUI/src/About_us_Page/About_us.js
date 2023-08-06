import React from "react";
import Tool from "../Tool/Tool";
import "./About_us.css"
import SDGs_logo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import {  Link } from "react-router-dom";
import Footer from "../Footer/Footer";
function About_us(){
    return(
        <div className="body_About">
            <h1>About Us</h1>
            <Tool></Tool>
            <Link to="/SDGs"><SDGs_logo></SDGs_logo></Link>
            <div className="About_us">
                <div className="About_us_main">
                    <div className="head_about_us">
                        <img src={require("../Homepage/Images/logo_youth_exchange.png")} alt=""></img>
                        <span className="Tag">Project-Based Cultural Exchange Program</span>
                    </div>
                    <div className="content_about_us">
                        <hr id="hr_about"></hr>
                        <h4><strong>1. Overview of the Organization</strong></h4>
                        <br></br>
                        <p>The YouThexchange program is dedicated to running a project-based program 
                            that brings together students from different countries and backgrounds to develop an integrated 
                            understanding of worldly problems. We believe in the power of collaboration, critical thinking hence, 
                            our project partners seek to create and develop innovative solutions to address global challenges.
                        </p>
                        <br></br>
                        <h4><strong>2. Our Past Projects</strong> </h4>
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
                            <br></br>
                            <li>The pilot program was a significant success, showcasing the potential of our project-based approach.
                            </li>
                        </ul>
                        <br></br>
                        <p><strong>Example of project: </strong><a href="https://drive.google.com/file/d/1Cz-8X2Q96YzSyqmH5mw8RtbU1n9dr0qD/view?usp=sharing">
                            On the topic of Sustainability in fashion</a></p>
                        <br></br>
                        <p>In this project the project partners began their research by conducting a stakeholder analysis, identifying key 
                            players in the fashion industry and their roles in sustainability efforts. The primary objective was to address 
                            the challenges of fast fashion and its detrimental impact on the environment and society. To gain deeper insights, 
                            the students performed empathy analysis, understanding the perspectives of workers and consumers affected by 
                            fast fashion. They then utilized two exercises, crisis orientation and vision orientation, to develop innovative 
                            solutions. Crisis orientation allowed them to identify urgent actions, while vision orientation helped them envision 
                            a future with sustainable fashion practices. Through our project, the students' comprehensive research and innovative 
                            approaches during the pilot program not only showcased the potential for a sustainable future in the fashion industry 
                            but also resulted in the successful identification of an innovative solution to address the challenges posed by fast fashion.
                        </p>
                        <br></br>
                        <br></br>
                        <p><strong>Current Project: <em>August of 2023 Program Overview - “Be a Connector”</em></strong></p>
                        <br></br>
                        <p>*Read more in <a href="https://docs.google.com/document/d/1s9Hw7BorCQVtXgDB-ms7Nus4wWZ7wAGpUBOKjMW9dEo/edit?usp=sharing">participant description </a></p>
                        <br></br>
                        <h4><strong>3. Goals of the Organization</strong> </h4>
                        <br></br>
                        <p>Our primary goal is to foster an integrated understanding of worldly problems among students from different countries. 
                            We aim to provide them with the opportunity to work closely with advisors and project groups, selecting topics aligned 
                            with their interests and the program's mission. Through research, campaigns, and solution development, our goal is to 
                            empower students to contribute to a more sustainable and inclusive world.
                        </p>
                        <br></br>
                        <p><strong>Aim:</strong> With guidance from advisors and working in project groups, students will select a topic based on provided options. 
                            They will then embark on a campaign to deepen their understanding of the chosen problem. Drawing from their insights, 
                            they will create innovative solutions that address the root causes and complexities of the issue at hand
                        </p>
                        <br></br>
                        <h4><strong>4. Who Do We Impact? </strong></h4>
                        <br></br>
                        <p>Our program aims to impact two key groups:</p>
                        <ul>
                            <li>Students (project partners) </li>
                            <li>Global/Local community </li>
                        </ul>
                        <br></br>
                        <p>We provide students with a platform to engage in interdisciplinary collaboration, enhance their problem-solving skills, 
                            and gain a deeper understanding of global issues. By nurturing their empathy and providing them with a platform to 
                            foster their capacity to think critically, we aim to empower them to become proactive global citizens who can contribute 
                            positively to society. Through their projects and solutions, they have the potential to create a lasting impact on the 
                            global community by addressing current and global problems and working towards sustainable and innovative solutions. </p>
                        <br></br>
                        <h4><strong>5. Contact Information</strong></h4>
                        <br></br>
                        <p><stong>Sign up form for Program: </stong><a href="https://forms.gle/71x7BjKgA3eXN1oB6">from</a> (deadline 15/8)</p>
                        <br></br>
                        <p><i class="fa-brands fa-facebook" ></i>  Facebook
                        <a className="social" href="https://www.facebook.com/profile.php?id=100094353529762&mibextid=LQQJ4d">: YouThexchange Project </a> 
                        </p>
                        <br></br>
                        <p><i class="fa-solid fa-at" ></i>  Gmail: youthexchangeprojectvn@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>    
        </div>
    )
}

export default About_us;