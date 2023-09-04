import React, { useState } from "react";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import Footer from "../../Footer/Footer";
import Tool, { Tool_mobile } from "../../Tool/Tool";
import "./Project2.css";
import { Search_mobile } from "../../Tool/Search";

const currentYear = new Date().getFullYear();
const Teammate2Data = [
  {
    name: "Minh",
    img: "./Img/Minh.png",
    age: currentYear - 2006,
    Nationality: "Vietnam",
    Education: "Senior (KIS International School, Thailand)",
  },
  {
    name: "In",
    img: "./Img/In.png",
    age: currentYear - 2006,
    Nationality: "Thailander",
    Education: "Senior (KIS International School, Thailand)",
  },
];

const Project2 = () => {
  const [currentImageType, setCurrentImageType] = useState("Linh");
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
    <div className="Project2_body">
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
      <div className="Project2_main">
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
                    onClick={() => setCurrentImageType(member.function)}
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
                Like we mentioned in seminar 1, this program will culminate in a{" "}
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
              <br></br>
              <p className="small">
                For each slide, persuasively convey the{" "}
                <strong>
                  Problem, Background, Relevance, and Solution Objectives
                </strong>
                of your project. This helps the audience develop a logical
                understanding of your problem. (There should be{" "}
                <em>4 content slides</em> in total. )
              </p>
              <br></br>
              <p className="small">
                A problem statement is a short and concise outline if your
                problem. It includes the (1) Problem (2) Background (3)
                Relevance and (4) the solution objectives. Take this example:
              </p>
              <br></br>
              <div className="overview">
                <strong>Problem</strong> The average customer service on-hold
                time for Example company exceeds five minutes during both its
                busy and slow seasons. The company is currently understaffed and
                customer service representatives are overwhelmed.
              </div>
              <div className="background">
                <strong>Background</strong> Example company is facing a
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
                  (2) What are the reactions from people impacted by this
                  problem?
                </p>
              </div>
              <div className="link">
                <strong>Relevance</strong> Reducing the on-hold times for
                customer service callers is crucial for Example company.
                Prolonged waiting times have a detrimental effect on customer
                satisfaction and loyalty, leading to potential customer churn
                and loss of revenue (3). Additionally, the company's declining
                reputation in terms of customer service can have a lasting
                impact on its competitive position in the market. Addressing
                this problem is of utmost importance to improve customer
                experience and maintain a positive brand image.
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
                  <i className="fa-solid fa-circle"></i> Developing strategies
                  and implementing measures to optimize the customer service
                  workflow and reduce on-hold times.
                </p>
                <br></br>
                <p className="small">
                  {" "}
                  <i className="fa-solid fa-circle"></i> Monitoring and
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
                <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i>  Afterwards, you and your partner should fill the empathy map
                  below for each of your main stakeholders. We will use this
                  simpler model.
                </p>
              </p>
              <br></br>
              <div className="img">
                <img src={require("./Img/Empathy_map.png")} alt=""></img>
              </div>
              <p className="small">
                Paste the Empathy Maps right after the Relevance slide.
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
                project, please have a read.
                <p className="small">
                  a. The{" "}
                  <a className="here" href="https://www.wsup.com/content/uploads/2017/08/PN008-ENGLISH-CleanTeam.pdf">
                    Case Study
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
              <h4>Post-seminar collaboration</h4>
              <h4>Task 1: Crisis and Vision Orientation </h4>
              <br></br>
              <p className="small">
                Decipher between the parts of your solution that is
                “crisis-oriented” and “vision-oriented.” This distinction
                requires different approaches to appeal to your audience.
                <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i> For example, the lack of infrastructure for sanitation is a
                  crisis in Ghana. It's common knowledge that new bathrooms must
                  be created to serve the citizens - this addresses the crisis.
                  However, creating toilets that stores waste in your house to
                  be picked up may raise skepticisms from your customers, making
                  this facet of your product vision-oriented.
                  <br></br>
                  <p className="small">
                    <i class="fa-solid fa-circle"></i>  For points made in the crisis-oriented box, write a{" "}
                    <strong>
                      <u>justification</u>
                    </strong>{" "}
                    for why your consumers will readily adopt such aspect of
                    your solution. Estimate the extent of effectiveness of said
                    aspect.
                    <br></br>
                    <i class="fa-solid fa-circle"></i> For points made in the vision-oriented box,
                    outline{" "}
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
                For sake of simplification, lets create 3 general personas for
                the ideal people using/impacted by your solution. For each box,
                list down the specific profile of your audience and answer the
                questions below.{" "}
              </p>
              <div className="img">
                <img src={require("./Img/picture4.png")} alt=""></img>
                <sub>**Add this to your presentation</sub>
              </div>
              <br></br>
              <h4>Task 3: Continue your presentation </h4>
              <br></br>
              <p classname="small">
                <i className="fa-solid fa-circle"></i> Work with your partner to complete unfinished portions of your
                presentation.
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

        <div className="box + se4">
          <div className="Seminar">
            <h2>Research - Pyscholgoy</h2>
            <br></br>
            <div className="content_seminar">
              <h4>Brainstorming / ideas</h4>
              <p className="small">
                Counselling psychology / cognitive psychology related. <br></br>
                <p className="small">
                  {" "}
                  <i class="fa-solid fa-circle"></i> Understanding how people
                  think.
                </p>
                SDG goal : #5 gender equality.
              </p>
              <br></br>
              <h4>Problem:</h4>
              <p className="small">
                Gender inequality <br></br>
                <p className="small">
                  {" "}
                  <i class="fa-solid fa-circle"></i> How can we use psychology (
                  insert specific later) to persuade society to be more mindful
                  of inequality between genders in society? <br></br>
                  <i class="fa-solid fa-circle"></i> Many people still think
                  that it is not a problem (they underestimate the issue).{" "}
                  <br></br>
                  <i class="fa-solid fa-circle"></i> Specifically in southeast
                  asia.
                </p>
              </p>
              <br></br>

              <h4>Potential solution(s)</h4>
              <p className="small">
                Raise awareness (support with psychology → reverse psychology){" "}
                <br></br>
                <p className="small">
                  {" "}
                  <i class="fa-solid fa-circle"></i> Research into how to
                  encourage ppl to care about the issue (with the help with
                  psychology).
                </p>
              </p>
              <br></br>

              <div className="overview">
                <strong>Link to the presentation:</strong>
                <a href="https://docs.google.com/presentation/d/1z5zyEdO56YK4mQTKr65waH5JsTI_6kKB-aw2t13L0jQ/edit?usp=sharing">
                  https://docs.google.com/presentation/d/1z5zyEdO56YK4mQTKr65waH5JsTI_6kKB-aw2t13L0jQ/edit?usp=sharing
                </a>
              </div>
              <br></br>
              <h4>
                <strong>Finalise statement:</strong>
              </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Gender inequality is an issue
                that is experienced by many people in various countries. It is
                an issue that many still overlook or consider as unimportant.
                This mainly affects women and the opportunities given to them.
              </p>

              <div className="link + heh">
                <strong>Research/background info</strong>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://www.asiapacific.ca/asia-watch/struggle-gender-equality-southeast-asia">
                    The Struggle for Gender Equality in Southeast Asia
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> Pandemic. <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Hindered the effort
                      make towards gender equality within SouthEast Asia.{" "}
                      <br></br>
                      <i class="fa-solid fa-circle"></i> Increase risk of
                      domestic violence against women. <br></br>
                    </p>
                    <br></br>
                    <i class="fa-solid fa-circle"></i> Gender stereotypical
                    jobs. <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Nurses. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> The majority of the
                        nurses are women. With over 70% being women. <br></br>
                        <i class="fa-solid fa-circle"></i> Lack of leadership
                        position (especially in healthcare) for women despite
                        the majority being women. <br></br>
                      </p>
                    </p>
                    <br></br>
                  </p>
                </p>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://asia.nikkei.com/Opinion/Equality-efforts-alone-will-not-close-Southeast-Asia-s-gender-gap">
                    Equality efforts alone will not close Southeast Asia's
                    gender gap
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> Despite the “problem”,
                    Southeast Asia has made progress in closing the inequality
                    between the genders. <br></br>
                    <i class="fa-solid fa-circle"></i> According to a study by
                    Boston Consulting Group (BCG), they find that men typically
                    leave their job for functional reasons whereas women leave
                    their job due to personal reason (i.e. family, flexibility,
                    childcare, motherhood). <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Suggesting that
                      opportunity alone will not keep women in workforce.{" "}
                      <br></br>
                      <i class="fa-solid fa-circle"></i> Thus implying that
                      factors such as culture and norm also play a role.{" "}
                      <br></br>
                    </p>
                    <i class="fa-solid fa-circle"></i> A potential solution for
                    improvement is: equity. <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Providing the support
                      women needs by understanding their needs/reasons.{" "}
                      <br></br>
                      <i class="fa-solid fa-circle"></i> Acknowledge the
                      differences between men and women. <br></br>
                    </p>
                    <i class="fa-solid fa-circle"></i> As of now only 35% of
                    workforce listed in Asia-Pacific companies are women.{" "}
                    <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> With 4% being CEO, 10%
                      chief financial officers, and 5% being broad chairs (
                      according to Equileap research group). <br></br>
                    </p>
                  </p>
                </p>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://www.lowyinstitute.org/the-interpreter/southeast-asia-gender-parity-not-gender-equality#:~:text=The%20country%27s%20female%20labour%20force,laws%20poorly%20enforced%20or%20ignored">
                    Southeast Asia: Gender parity is not gender equality | Lowy
                    Institute.
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> In the Philippines:{" "}
                    <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> “Filipino women face
                      restricted access to health resources, sex education and
                      birth control”. <br></br>
                      <i class="fa-solid fa-circle"></i> Consider to be one of
                      the most dangerous place for women.
                    </p>
                    <br></br>
                    <i class="fa-solid fa-circle"></i> In Singapore:
                    <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Consider to be one of
                      the safest place for women. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> The high safety is
                        due to law enforces Labour force.
                      </p>
                      <br></br>
                      <i class="fa-solid fa-circle"></i> Around 70% of the
                      workforce is women (informal economy) → typically working
                      in low paying/traditional vulnerable job. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> I.e. textile /
                        garment industry. <br></br>
                        <i class="fa-solid fa-circle"></i> Thus no reliable/
                        consistent wages. <br></br>
                        <i class="fa-solid fa-circle"></i> No protection.{" "}
                        <br></br>
                        <i class="fa-solid fa-circle"></i> Little to no legal
                        recourse. <br></br>
                        <i class="fa-solid fa-circle"></i> Harsh working
                        condition. <br></br>
                      </p>
                    </p>
                    <br></br>
                    <i class="fa-solid fa-circle"></i> Cause: <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Gender norms/ biases/
                      stereotypes rooted into the culture. <br></br>
                    </p>
                  </p>
                </p>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://hbr.org/2020/12/why-arent-we-making-more-progress-towards-gender-equity">
                    Why Are not We Making More Progress Towards Gender Equity?
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> Gender fatigue <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> According to a study ,
                      despite the attempts and effort put into creating a
                      diverse workplace, many people still failed to recognize
                      the gender inequality in front of them. <br></br>
                      <i class="fa-solid fa-circle"></i> Gender fatigue is a
                      “phenomenon of simultaneously acknowledging that gender
                      inequality exists in general while denying that it exists
                      in one’s immediate work environment”. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> There are different
                        perspectives in which the people in workplace see+denial
                        gender inequality. <br></br>
                        <i class="fa-solid fa-circle"></i> Gender fatigue is a
                        “phenomenon of simultaneously acknowledging that gender
                        inequality exists in general while denying that it
                        exists in one’s immediate work environment”. <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> 1. It exist
                          elsewhere. <br></br>
                          <i class="fa-solid fa-circle"></i> 2. It exist in the
                          past but not present. <br></br>
                          <i class="fa-solid fa-circle"></i> 3. No longer exist
                          as women are getting opportunities/advantage in
                          workplace. <br></br>
                          <i class="fa-solid fa-circle"></i> 4. Choose to
                          ignore. <br></br>
                        </p>
                      </p>
                    </p>
                    <i class="fa-solid fa-circle"></i> Essentially gender
                    inequality is build up of “small scale incident” → build up
                    over time. <br></br>
                  </p>
                </p>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://investinginwomen.asia/posts/gender-equality-work-south-east-asias-hurdle/">
                    Gender equality at work: South East Asia’s other hurdle
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> Gender norms/ company
                    culture. <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Many employees viewed
                      that certain jobs are more inclined toward “men” and
                      others by “women”. This is all based of their
                      characteristic (i.e. stereotype ). <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> “This work is quite
                        meticulous, many men won’t like it. Basically, it
                        requires perseverance, and that character trait women
                        have more often than men.” (Female). <br></br>
                        <i class="fa-solid fa-circle"></i> Many staff believe
                        that these preferences does not mean “unequal
                        treatments”. <br></br>
                        <i class="fa-solid fa-circle"></i> Men staff viewed that
                        women are more “emotional” and thus are not suited for
                        certain jobs. <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> (this seems very
                          stereotypical TT). <br></br>
                        </p>
                      </p>
                      <i class="fa-solid fa-circle"></i> The higher the job
                      position the higher the work priority there is. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> In southeast asia
                        culture, women are more pressure to take care of their
                        family (especially if they have children). <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> Some companies take
                          this into the consideration by having flexible work
                          policies. <br></br>
                        </p>
                        <i class="fa-solid fa-circle"></i> SOCIAL NORMS.{" "}
                        <br></br>
                      </p>
                    </p>
                  </p>
                </p>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://www.simplypsychology.org/social-roles.html#:~:text=Social%20norms%20are%20the%20unwritten,order%20and%20predictability%20in%20society">
                    Social Roles and Social Norms.
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> Conformity <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Expectations set by
                      society/culture regarding how one needs to behave in
                      certain situations. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> Provides rule and
                        order. <br></br>
                      </p>
                      <i class="fa-solid fa-circle"></i> The norms are a large
                      social influence on one’s behaviour in order for one to
                      feel accepted to their group (in group vs out group? ).{" "}
                      <br></br>
                    </p>
                  </p>
                </p>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://www.npr.org/2012/07/12/156664337/stereotype-threat-why-women-quit-science-jobs">
                    How Stereotypes Can Drive Women To Quit Science : NPR
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> In STEM related fields
                    gender stereotypes play a huge role in who is considered to
                    be capable of working in this area (specifically sciences,
                    engineering, maths, etc). <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Even if they go into
                      it, women have a much higher chance of quitting than men.
                      WHY? <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> Because women don’t
                        get the same opportunity for advancement/promotions like
                        men. <br></br>
                        <i class="fa-solid fa-circle"></i> They are being
                        reminded (subtly ) that men are better than women
                        (within the workplace environment). <br></br>
                      </p>
                      <i class="fa-solid fa-circle"></i> Stereotype threats.{" "}
                      <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> This refers to when
                        people are aware of the stereotype placed upon them
                        causing them to fear that they will behave in a way that
                        confirms the stereotype. As a result “their fears can
                        inadvertently make the stereotype become
                        self-fulfilling.” <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> Affect their
                          performance. <br></br>
                          <p className="small">
                            {" "}
                            <i class="fa-solid fa-circle"></i> Instead of
                            “focusing” on the work, women focus on seeing
                            whether or not the stereotype is there (thus
                            distraction?). <br></br>
                          </p>
                          <i class="fa-solid fa-circle"></i> Psychologists found
                          that whether you believe the stereotype or not you
                          will still be affected by it. <br></br>
                        </p>
                        <i class="fa-solid fa-circle"></i> Stereotype makes it
                        harder for women to enter these fields or to even stay
                        and thrive. <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> An “simple” fix →
                          to increase the opportunity for women there needs to
                          be more women in those fields. (essentially lack of
                          representation). <br></br>
                        </p>
                      </p>
                    </p>
                  </p>
                </p>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://www.risely.me/gender-inequality-in-the-workplace/">
                    3 Examples of Gender Inequality In The Workplace: Causes,
                    Effects And Solutions - Risely
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> Some potential solutions
                    to gender inequality in workplace (around the world not
                    specific to southeast asia). <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Promote equal pay{" "}
                      <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> Through
                        implementation of transparent pay structure. <br></br>
                      </p>
                      <i class="fa-solid fa-circle"></i> Unbiased
                      promotion/hiring. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> Implement policies /
                        practices. <br></br>
                      </p>
                      <i class="fa-solid fa-circle"></i> Promote Parental
                      Support: <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> Offers parental leave
                        policies that are both beneficial for both men and women
                        (dad and mom) which would (hope to) encourage shared
                        caregiving. <br></br>
                      </p>
                      <i class="fa-solid fa-circle"></i> Flexible work schedule.{" "}
                      <br></br>
                      <i class="fa-solid fa-circle"></i> Advocacy. <br></br>
                    </p>
                  </p>
                </p>
                <br></br>
                <p>
                  <strong>Sources</strong> <br></br>
                  <a href="https://www.epi.org/publication/womens-work-and-the-gender-pay-gap-how-discrimination-societal-norms-and-other-forces-affect-womens-occupational-choices-and-their-pay/">
                    “Women’s work” and the gender pay gap: How discrimination,
                    societal norms, and other forces affect women’s occupational
                    choices—and their pay
                  </a>
                  <br></br>
                  <br></br>
                  <strong>Summary/bullet points</strong> <br></br>
                  <p className="small">
                    {" "}
                    <i class="fa-solid fa-circle"></i> In many circumstances,
                    women who work the same job as men are paid much less than
                    men. <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Many argue that this is
                      due to their educational background, work experience, and
                      location. <br></br>
                      <i class="fa-solid fa-circle"></i> Gender pay gap may have
                      been created voluntary → due to the occupations men/women
                      chooses. <br></br>
                    </p>
                    <i class="fa-solid fa-circle"></i> At a young age, girls can
                    and are often steer (or discourage) towards certain
                    occupations that are considered to be for “female” (norm).{" "}
                    <br></br>
                    <p className="small">
                      {" "}
                      <i class="fa-solid fa-circle"></i> Due to mainly parents
                      and media influence. <br></br>
                      <p className="small">
                        {" "}
                        <i class="fa-solid fa-circle"></i> For example parents
                        are more likely to expect their son to go into STEM
                        rather than their daughter. <br></br>
                        <i class="fa-solid fa-circle"></i> These expectations
                        often turn out to be the “self-fulfilling prophecy”.{" "}
                        <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> In psychology, self
                          fulfilling prophecy refers to one’s ability to believe
                          in their ability which will influence the result (the
                          more you believe the better the outcome will be, etc).{" "}
                          <br></br>
                        </p>
                        <i class="fa-solid fa-circle"></i> Due to these
                        influences girls evaluate their possible career choice
                        differently than men. <br></br>
                        <p className="small">
                          {" "}
                          <i class="fa-solid fa-circle"></i> Having to take in
                          the consideration of the “social norm”. <br></br>
                        </p>
                      </p>
                    </p>
                  </p>
                </p>
              </div>
              <br></br>
              <h4>
                <strong>Background:</strong>
              </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Gender inequality is an issue
                that is seen everywhere, whether that be implicitly or
                explicitly. It is mostly evident in the workplace, where women
                are typically offered lower salaries and a more traditional job.
                This may be due to the culture and stereotypes placed upon
                women. However, recently, many countries( including in Southeast
                Asia) have been working towards reducing the gap between
                genders. Such as increasing diversity, law enforcement, and
                such. However, it is still not enough to bridge the gap between
                genders.
              </p>
              <br></br>

              <h4>
                <strong>Relevance:</strong>
              </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Recognizing and understanding
                the importance of equality between genders are important.
              </p>
              <br></br>

              <h4>
                <strong>Solution objectives: </strong>
              </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Understanding WHY?
              </p>
              <br></br>

              <h4>
                <strong>NOTES: </strong>
              </h4>
              <br></br>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Relevance (more research).{" "}
                <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i> Inequality → pink tax.{" "}
                  <br></br>
                  <p className="small">
                    <i class="fa-solid fa-circle"></i> Product targeted to women
                    is more expensive. <br></br>
                    <i class="fa-solid fa-circle"></i> Not given the same
                    opportunities. <br></br>
                    <p className="small">
                      <i class="fa-solid fa-circle"></i> Jobs (gender pay gap).{" "}
                      <br></br>
                    </p>
                  </p>
                </p>
                <i class="fa-solid fa-circle"></i> Solution: <br></br>
                <p className="small">
                  <i class="fa-solid fa-circle"></i> Understanding WHY → so that
                  we can become aware of what we do → reduce it/ decrease the (
                  differences). <br></br>
                </p>
              </p>
              <br></br>

              <h4>
                <strong>EMPATHY MAP</strong>
              </h4>
              <div className="img">
                <img src={require("./Img/Empathy_map.png")} alt=""></img>
              </div>
              <br></br>
              <p className="small">
                <i class="fa-solid fa-circle"></i> Women are not the only ones
                who identify with the term feminist. Four-in-ten men in the
                United States say this term describes them at least somewhat
                well. Democratic men are more than twice as likely as their
                Republican counterparts to say feminist describes them well (54%
                vs. 26%). And, like women, men with a bachelor’s degree or
                higher are more likely than those with less education to say the
                term describes them at least somewhat well (46% vs. 37%).
              </p>
              <br></br>

              <h4>
                <strong>Child labor.</strong>
              </h4>
              <p className="small">
                <i class="fa-solid fa-circle"></i> There are currently 152
                million children engaged in child labor around the world. [3]
                Child labor makes it difficult for children to attend school or
                limits their attendance, putting them at risk of falling behind
                their peers. Boys and girls are affected differently by child
                labor and parents’ decisions are often influenced by wider
                social norms about the different roles that they should play in
                the home and in society. Girls are much more likely to shoulder
                the responsibility for household chores while boys are more
                likely to engage in harmful work such as construction. Girls are
                usually pulled out of school earlier than boys and are more
                likely to face sexual exploitation and slavery.
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
                  <a href="https://docs.google.com/presentation/d/1BrhDywUaRLechxFLz0rpQnRcINyicnaoaBUVaRsKeT4/edit#slide=id.p">
                    <img src={require("./Img/final.png")} alt=""></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project2;
