import React from "react";
import Tool from "../../Tool/Tool";
import Footer from "../../Footer/Footer";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import "./Subtopic_1.css"
import SetUpSubtopic1 from "./Set_up_subtopic1";
import MenuPilotProgram from "../Menu";
const header_content=[
    {
        name:"1. Our goal",
        id:"#1"
    },
    {
        name:"2. Process",
        id:"#2"
    },
    {
        name:"3. Our work",
        id:"#3"
    },
    {
        name:"4. Product",
        id:"#4"
    }
]
const Subtopic1=()=>{
    return(
        <div className="body_subtopic1">
            <Tool />
            <SDGslogo />
            <MenuPilotProgram />
            <div className="Roll">
                <div className="bar"><i class="fa-solid fa-bars"></i></div>
                <div className="contain">
                {header_content.map((header) => (
                        <a key={header.name} href={header.id}><i className="fa-solid fa-circle"></i>{header.name}</a>
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
                    <img src={ require ("../Images/picture_1.png")} alt=""></img>

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
                    <hr ></hr>
                    <br></br>
                    <h4 id="2"><strong>Process of the Program</strong></h4>
                    <br />
                    <ul>
                        <li><i className="fa-solid fa-circle"></i>Seminar based:
                            <ul>
                                <li><i class="fa-regular fa-circle"></i>40 minutes group discussion.</li>
                                <li><i class="fa-regular fa-circle"></i>20 minutes breakout room to work with your partner.</li>
                            </ul>
                        </li>
                        <li><i className="fa-solid fa-circle"></i>Schedule:
                            <ul>
                                <li><i class="fa-regular fa-circle"></i>The seminars will happen every other day for 2 weeks.</li>
                                <li><i class="fa-regular fa-circle"></i>Day A: seminar day (1hr) </li>
                                <li><i class="fa-regular fa-circle"></i>Day B: partner workday
                                    <ul>
                                        <li><i class="fa-solid fa-square"></i>It is mandatory that the project partners meet in 
                                        the interim of the seminars to work on the project for at least 1hr. The supervisors 
                                        will keep track of this.</li>    
                                    </ul>    
                                </li>
                            </ul>
                        </li>
                        <li><i className="fa-solid fa-circle"></i>Inquiry and Disagreement
                            <ul>
                                <li><i class="fa-regular fa-circle"></i>We are currently building a team of expert advisors on the 
                                side-line to assist with any roadblocks.</li>
                                <li><i class="fa-regular fa-circle"></i>In the case of a conflict, please contact our supervisor. 
                                    <ul>
                                    <li><i class="fa-solid fa-square"></i>Human resource/ technicalities /advisory-related matters:
                                        <ul>
                                            <li><i class="fa-solid fa-circle"></i>Anh Thu: <a href="mailto:thunguyen091104@gmail.com">thunguyen091104@gmail.com</a></li>
                                        </ul>
                                    </li>  
                                    <li><i class="fa-solid fa-square"></i>Content/academic-related problems:
                                        <ul>
                                            <li><i class="fa-solid fa-circle"></i>Van Anh: <a href="mailto:lilynguyenvananh@gmail.com">thunguyen091104@gmail.com</a></li>
                                        </ul>
                                    </li>  
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br></br>
                    <hr ></hr>
                    <br></br>
                    <h4 id="3"><strong>Content of the Program</strong></h4>
                    <ul className="content_3">
                        <li><strong>Seminar 1:</strong> In this seminar, we will acquaint ourselves with each other, the pilot program, 
                        and the organization itself. Expectations and goals of this pilot program will be set by everyone. Finally, 
                        you will be introduced to your project partner and jump into sharing and cultivating your multiple ideas.</li>
                        <li><strong>Seminar 2:</strong> In the second seminar, we will discuss a fascinating mindset that helps us 
                        adopt a “human-oriented” approach to solving social issues - Design Thinking. Together, we will build our 
                        own understanding of the mindset and apply it to our project in order to uncover assumptions and biases.</li>
                        <li><strong>Seminar 3:</strong> In this third seminar, we will learn about the nature of our problem - crisis 
                        or vision oriented. By being able to differentiate the nature of our problems and sub-problems, we understand 
                        how to approach stakeholders in a persuasive manner. In addition, we will start a case study that teaches us 
                        how to identify the different levels of stakeholders.</li>
                        <li><strong>Seminar 4:</strong> This seminar is all about empathy. How do we empathize with the stakeholders 
                        of our problem? To do that, we must collect precise and deliberate data in order to gain insights and empathy 
                        with our stakeholders. At the tail-end of the seminar, we will return to our previous case study and conduct 
                        a deeper evaluation of the stakeholder pains and gains, given different data collection methods (this is called 
                        method triangulation).</li>
                        <li><strong>Seminar 5:</strong> Now, we discuss the relevance of our problem. How do we differentiate between 
                        a symptom and a root cause? We will be introduced to models that push us to find the crux of our problem 
                        (what truly vexes our stakeholders?) and evaluate the ability of our solution to gain traction.</li>
                        <li><strong>Seminar 6:</strong> This seminar is about communicating the urgency of our problem and the 
                        attractiveness of our proposed solution. We will understand how to energize our listeners to action not paralyze 
                        or overwhelm them with loose ends. We do this by returning back to the SDG goals such that we “begin with the end 
                        in mind.”</li>
                        <li><strong>Seminar 7:</strong> Presentations!</li>
                        <li><strong>Seminar 8:</strong> Project partners will meet with the executive team to feedback and reflect on 
                        the program. We will guide you on where you want to project to go next, competition? More development? Most importantly, 
                        how we will continue the partnership far beyond the program.</li>
                    </ul>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h4 id="4"><strong>Product of the Program</strong></h4>
                    <br></br>
                    <ul>
                        <li><i className="fa-solid fa-circle"></i><strong>Presentation:</strong> The amalgamation of these seminars will 
                        result in a presentation that shows the breadth and depth of your project's root issue and stakeholder analysis.
                        </li>
                        <li><i className="fa-solid fa-circle"></i><strong>Tool:</strong>  You will be equipped with tools, models, 
                        and mindsets that allow you to view the issue from multiple lenses. 
                        </li>
                        <li><i className="fa-solid fa-circle"></i><strong>Partnership:</strong>  
                        Your partnership will be far-reaching beyond this pilot program whether it be working on the same project together 
                        or cultivating a relationship that helps each party gain a more cosmopolitan perspective of the world. 
                        </li>
                        <li><i className="fa-solid fa-circle"></i><strong>Continuous support:</strong>  Our programs will support you beyond 
                        the 2 weeks, providing you with resources, advisors, and opportunities to grow your project. 
                        </li>
                        <li><i className="fa-solid fa-circle"></i><strong>Recruitment:</strong>  If you want to work for the organization in 
                        the cultural exchange branch or advisory branch, you will be easily considered, given your extensive and enthusiastic 
                        contribution to the pilot. 
                        </li>
                    </ul>    
                </div>
            </div>
            <Footer />
            <SetUpSubtopic1 />
        </div>
    )
}

export default Subtopic1; 