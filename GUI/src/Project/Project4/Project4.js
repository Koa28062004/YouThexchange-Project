import React, { useState } from "react";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import Footer from "../../Footer/Footer";
import Tool, { Tool_mobile } from "../../Tool/Tool";
import "./Project4.css";
import Project, { SetupSubtopic2 } from "./Setup_project4/setupProject4";
import { Search_mobile } from "../../Tool/Search";

const currentYear = new Date().getFullYear();
const Teammate2Data = [
  {
    name: "Kacy",
    img: "./Img/Padma.png",
    age: currentYear - 2006,
    Nationality: "Vietnam",
    Education: "Empty",
  },
  {
    name: "Janya",
    img: "./Img/Janya.png",
    age: currentYear - 2006,
    Nationality: "India",
    Education:
      "Senior (KIS International School, Thailand)",
  },
];

const Project4 = () => {
  const [currentImageType, setCurrentImageType] = useState("Janya");
  const [showPDF, setShowPDF] = useState(false);
  const [TypeContent, setTypeContent] = useState(`./Infographic - SHEIN.pdf`);
  const togglePDF = (content) => {
    if (content === "Infog") {
      setTypeContent(`#`);
    }
    if (content === "Presentation") {
      setTypeContent(`#`);
    }
    setShowPDF(!showPDF);
  };
  return (
    <div className="Projec4_body">
      {showPDF && (
        <iframe
          className="pdf_project"
          src={require(`${TypeContent}`)}
          width="100%"
          height="1000px"
          title="PDF Viewer"
        />
      )}
      <Tool />
      <Tool_mobile />
      <Search_mobile />
      <SDGslogo />
      <div className="Project4_main">
        <div className="Teammate_profile">
          <h1>Teammate profile</h1>
          <div className="profiles">
            {Teammate2Data.map((member, index) => (
              <div className="profile" key={index}>
                <div className="profile_img">
                  <img src={require(`${member.img}`)} alt=""></img>
                </div>
                <div className="name_teammate">
                  Name: {member.name}
                  <i
                    className="fa-solid fa-circle-info"
                    onClick={() => setCurrentImageType(member.name)}
                  ></i>
                </div>
                <div className="profile_main">
                  <p>Age: {member.age}</p>
                  <p>Nationality: {member.Nationality}</p>
                  <p>Education: {member.Education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="box + se2">
          <div className="Seminar">
            <h2>Seminar 2: Understanding the problem</h2>
            <br></br>
            <div className="content_seminar">
              <h4>Post-seminar collaboration</h4>
              <br></br>
              <h4>Task 1: Create a Presentation </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Like we mentioned in seminar
                1, this program will culminate in a{" "}
                <strong>presentation</strong> done by both project partners.
                This includes a complete understanding, breath and depth, of the
                problem and an outlined analysis of the proposed solution.
              </p>
              <br></br>
              <p>
                Please link your presentation{" "}
                <a className="here" href="https://www.canva.com/design/DAFnBw0OzhA/-LEcFFWvRKo4FcpPXPYYnA/view?utm_content=DAFnBw0OzhA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                  here
                </a>{" "}
                with open access. We suggest you use Canva as it is a
                collaborative working site, however, feel free to use any means
                to effectively convey your project.
              </p>
              <br></br>
              <h4>Task 2: Problem Statement </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> For each slide, persuasively
                convey the{" "}
                <strong>
                  Problem, Background, Relevance, and Solution Objectives{"  "}
                </strong>
                of your project. This helps the audience develop a logical
                understanding of your problem. (There should be{" "}
                <em>4 content slides</em> in total. )
              </p>
              <br></br>
              <p className="small">
                <i class="fa-solid fa-circle"></i> A problem statement is a
                short and concise outline if your problem. It includes the (1)
                Problem (2) Background (3) Relevance and (4) the solution
                objectives. Take this example:
              </p>
              <br></br>
              <div className="overview">
                <strong>Problem:</strong> The average customer service on-hold
                time for Example company exceeds five minutes during both its
                busy and slow seasons. The company is currently understaffed and
                customer service representatives are overwhelmed.
              </div>
              <div className="background">
                <strong>Background:</strong> Example company is facing a
                significant challenge in managing their customer service on-hold
                times. In the past (1), the company had been known for its
                efficient and timely customer service, but due to a combination
                of factors, including understaffing and increased customer
                demand, the on-hold times have exceeded five minutes
                consistently. This has resulted in frustration and
                dissatisfaction among customers (2), negatively impacting the
                company's reputation and customer loyalty.
                <br></br>
                <br></br>
                <p className="small">
                  (1) How was this problem approached in the past?
                  <br></br>
                  <br></br>
                  (2) What are the reactions from people impacted by this
                  problem?
                </p>
              </div>
              <div className="link">
                <strong>Relevance:</strong> Reducing the on-hold times for
                customer service callers is crucial for Example company.
                Prolonged waiting times have a detrimental effect on customer
                satisfaction and loyalty, leading to potential customer churn
                and loss of revenue (3). Additionally, the company's declining
                reputation in terms of customer service can have a lasting
                impact on its competitive position in the market. Addressing
                this problem is of utmost importance to improve customer
                experience and maintain a positive brand image.
                <br></br>
                <br></br>
                (3) What are the short-term, long-term consequences were this
                problem to persist?
              </div>
              <br></br>
              <div className="link + heh">
                <p>
                  <strong>Objectives: </strong>The primary objective (4) of this
                  project is to reduce the on-hold times for customer service
                  callers at Example company. The specific objectives include:
                </p>
                <br></br>
                <p className="small">
                  {" "}
                  <i class="fa-solid fa-circle"></i> Analyzing the current
                  customer service workflow and identifying bottlenecks
                  contributing to increased on-hold times.
                </p>
                <br></br>
                <p className="small">
                  {" "}
                  <i class="fa-solid fa-circle"></i> Assessing the staffing
                  levels and resource allocation to determine the extent of
                  understaffing and its impact on customer service.
                </p>
                <br></br>
                <p className="small">
                  {" "}
                  <i className="fa-solid fa-circle"></i>Developing strategies
                  and implementing measures to optimize the customer service
                  workflow and reduce on-hold times.
                </p>
                <br></br>
                <p className="small">
                  {" "}
                  <i className="fa-solid fa-circle"></i>Monitoring and
                  evaluating the effectiveness of the implemented measures
                  through key performance indicators (KPIs) such as average
                  on-hold time, customer satisfaction ratings, and customer
                  feedback
                </p>
                <br></br>
              </div>
              <br></br>
              <h4>Task 3: Empathy Mapping</h4>
              <br></br>
              <p className="small">
                1. Please identify 2-3 people directly consuming your solution
                (these are called your customers) or are directly impacted by
                the benefits of your solution (these are called your
                beneficiaries).
                <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i> Afterwards, you and your
                  partner should fill the empathy map below for each of your
                  main stakeholders. We will use this simpler model.
                </p>
              </p>
              <br></br>
              <div className="img">
                <img src={require("./Img/Empathy_map.png")} alt=""></img>
              </div>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Paste the Empathy Maps right
                after the Relevance slide.
              </p>
              <br></br>
              <h4>
                Pre-seminar Preparation: Expectations for the next seminar{" "}
              </h4>
              <br></br>
              <p className="small">
                1. Next week, we will delve into a case study that has
                successfully utilize Design Thinking in their work: Bringing
                clean toilets to Ghana! Below is a short report of their
                project, please have a read. <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i>
                  <a className="here" href="https://www.wsup.com/content/uploads/2017/08/PN008-ENGLISH-CleanTeam.pdf">
                    The Case Study
                  </a>
                </p>
              </p>
              <br></br>
              <p className="small">
                Be prepared to share your slides with the bigger team in our 3rd
                seminar!{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="box + se3">
          <div className="Seminar">
            <h2>Seminar 3: Stakeholder Analysis</h2>
            <br></br>
            <div className="content_seminar">
              <h4>Post-seminar collaboration</h4> <br></br>
              <h4>Task 1: Crisis and Vision Orientation </h4>
              <br></br>
              <p className="small">
                Decipher between the parts of your solution that is
                “crisis-oriented” and “vision-oriented.” This distinction
                requires different approaches to appeal to your audience.
                <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i> For example, the lack of
                  infrastructure for sanitation is a crisis in Ghana. It's
                  common knowledge that new bathrooms must be created to serve
                  the citizens - this addresses the crisis. However, creating
                  toilets that stores waste in your house to be picked up may
                  raise skepticisms from your customers, making this facet of
                  your product vision-oriented.
                  <br></br>
                  <p className="small">
                    <i class="fa-solid fa-circle"></i> For points made in the
                    crisis-oriented box, write a{" "}
                    <strong>
                      <u>justification</u>
                    </strong>{" "}
                    for why your consumers will readily adopt such aspect of
                    your solution. Estimate the extent of effectiveness of said
                    aspect.
                    <br></br>
                    <i class="fa-solid fa-circle"></i> For points made in the
                    vision-oriented box, outline{" "}
                    <strong>
                      <u>potential skepticism</u>
                    </strong>{" "}
                    of such aspect of your solution and how you aim to tackle
                    them, or what information must you collect to understand why
                    the skepticism exists.
                  </p>
                </p>
              </p>
              <div className="img">
                <img src={require("./Img/picture3.png")} alt=""></img>
                <sub>**Add this to your presentation</sub>
              </div>
              <br></br>
              <h4>Task 2: Stakeholder Analysis</h4>
              <br></br>
              <p className="small">
                <i class="fa-solid fa-circle"></i> For sake of simplification,
                lets create 3 general personas for the ideal people
                using/impacted by your solution. For each box, list down the
                specific profile of your audience and answer the questions
                below.{" "}
              </p>
              <div className="img">
                <img src={require("./Img/picture4.png")} alt=""></img>
                <sub>**Add this to your presentation</sub>
              </div>
              <br></br>
              <h4>Task 3: Continue your presentation </h4>
              <br></br>
              <p classname="small">
                <i class="fa-solid fa-circle"></i> Work with your partner to
                complete unfinished portions of your presentation.
              </p>
              <br></br>
              <h4>
                Pre-seminar Preparation: Expectations for the next seminar{" "}
              </h4>
              <br></br>
              <p className="small">
                <strong>
                  <u>
                    Be prepared to share your slides with the bigger team in our
                    4th seminar!
                  </u>
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className=" box + presentation">
          <div className="Seminar">
            <div className="content_seminar">
              <h2>Final Product</h2>
              <div className="final_production">
                <div className="Present">
                  <h4>Presentation</h4>
                  <br></br>
                  <a href="https://drive.google.com/file/d/1fjA37Kbx1FXYT1mdjwPRt1WadOtx6pQY/view?usp=sharing">
                    <img src={require("./Img/final.png")} alt=""></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project currentImageType={currentImageType} />
      <Footer />
      <SetupSubtopic2 />
      {showPDF && (
        <button className="btn_toggle_pdf" title="Close" onClick={togglePDF}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  );
};

export default Project4;
