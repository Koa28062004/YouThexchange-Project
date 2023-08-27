import React ,{useState}from "react";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import Footer from "../../Footer/Footer";
import Tool from "../../Tool/Tool";
import "./Project1.css"
import Project ,{SetupSubtopic2} from "./Setup_project1/setupProject1";

const currentYear = new Date().getFullYear();
const Teammate1Data=[
    {
        function:"Rashi",
        name:"Rashi Mukherjee",
        img:"./img/Rashi.JPG",
        age:currentYear-2006,
        Nationality: "Thailander",
        Education: "Senior (KIS International School, Thailand)"
    },
    {
        function:"Linh",
        name:"Trinh Ba Khanh Linh",
        img:"./img/Linh.JPG",
        age:currentYear-2006,
        Nationality: "Vietnamese",
        Education: "Senior (BVIS - British Vietnamese International School HCMC, Vietnam)"
    },
];

const Project1=()=>{
    const [currentImageType, setCurrentImageType] = useState("Linh");
    const [showPDF, setShowPDF] = useState(false);
    const [TypeContent,setTypeContent] = useState (`./Infographic - SHEIN.pdf`)
    const togglePDF = (content) => {
        if (content === "Infog") {
            setTypeContent(`./Infographic - SHEIN.pdf`);
        }
        if (content === "Presentation") {
            setTypeContent(`./Presentation - Rashi & Linh.pdf`);
        }
      setShowPDF(!showPDF);
    };
    return(
        <div className="Project1_body">
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
            <SDGslogo />
            <div className="header-project1"><h1>SUSTAINABILITY & BUSINESSES</h1></div>

            <div className="Project1_main">
                
                <div className="Teammate_profile">
                    <h1>Teammate profile</h1>
                    <div className="profiles">
                    {Teammate1Data.map((member, index) =>  (
                        <div className="profile" key={index}>
                            <div className="profile_img">
                                <img src={require(`${member.img}`)} alt=""></img>
                            </div>
                            <div className="name_teammate">
                                Name: {member.name}
                                <i className="fa-solid fa-circle-info" onClick={() => setCurrentImageType(member.function)}></i>
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

                <div className="box + se1">
                    <div className="Seminar">
                        <h2>Seminar 1: Business & Sustainability</h2>
                        <div className="content_seminar">
                            <div className="img">
                                <img src={require ("./img/picture1.png")} alt="" ></img>
                            </div>
                            <p><strong>Develop the idea by doing more research on the problem, the current available solutions, 
                                and the current social climate towards addressing the problem. </strong></p>
                            <div className="header">
                                Fast Fashion
                            </div>
                            <div className="overview">
                                <h4>Overview</h4>
                                <p>Fast fashion refers to the production of inexpensive, trendy clothing that is quickly manufactured 
                                    and often ends up in landfills after a short period of use. The fast fashion industry has been 
                                    criticized for its negative environmental and social impacts, including excessive resource consumption, 
                                    pollution, and poor working conditions in factories. It is a significant contributor to waste and 
                                    greenhouse gas emissions.
                                </p>
                            </div>
                            <div className="about">
                                <h4>About Shein</h4>
                                <p>
                                    Shein is an e-commerce platform that specializes in fast fashion. It offers a wide range of affordable 
                                    clothing options to customers worldwide. Shein has faced scrutiny for its unsustainable business practices, 
                                    including the use of low-quality materials, excessive packaging, and unethical labor practices in its supply chain.
                                </p>
                            </div>
                            <h4>Shein effects on the environment</h4>
                            <br></br>
                            <p className="small"><strong>1. Water Pollution: </strong>Shein produces a large quantity of synthetic clothing that requires the release 
                            of harmful chemicals such as dyes, bleaches, and solvents into waterways. These chemicals not only contaminate water 
                            sources but also put aquatic and human life at risk.</p>
                            <br></br>
                            <p className="small"><strong>2. Carbon Footprint: </strong>Shein's carbon footprint is huge due to its production, 
                            transportation, and shipping of large quantities of clothing products worldwide. With their busy operations and 
                            fast supply chain, they emit large quantities of carbon dioxide, which contributes to climate change. According 
                            to the Global Fashion Agenda report, the apparel and footwear industry is accountable for 8% of global greenhouse 
                            gas emissions, of which fast fashion is a significant contributor. As a result, the company leaves about 6.3 million 
                            tons of carbon dioxide a year in its trail—a number that falls well below the 45% target to reduce global carbon 
                            emissions by 2030, which the U.N. has said is necessary for fashion companies to implement to help limit global warming.
                            <br></br>
                            <br></br>
                            “The process for making a year's worth of virgin polyester churns out the same amount of CO2 as 180 coal-fired 
                            power plants - that's around 700 million tonnes of CO2 annually. Reports estimate this could double again by 2030.” 
                            - euronews.green</p>
                            <br></br>
                            <p className="small"><strong>3. Land Pollution: </strong>Shein's fast fashion business model produces large 
                            quantities of waste textiles and packaging, which are often sent to landfills and contribute to environmental 
                            pollution. According to the Ellen MacArthur Foundation, the equivalent of one garbage truck filled with textiles 
                            is wasted every second. Much of this waste ends up in landfills, where it can take years to decompose, leading to 
                            environmental pollution.</p>
                            <div className="link">
                            <h4>References: </h4>
                            <br></br>
                                    <a href="https://time.com/6247732/shein-climate-change-labor-fashion/">https://time.com/6247732/shein-climate-change-labor-fashion/</a>
                                    <br></br>
                                    <a href="https://www.euronews.com/green/2022/10/17/how-are-shein-hauls-making-our-planet-unlivable">https://www.euronews.com/green/2022/10/17/how-are-shein-hauls-making-our-planet-unlivable</a>

                            </div>
                            <div className="about">
                            <h4>About Patagonia</h4> 
                                Patagonia is an outdoor clothing and gear company known for its commitment to sustainability. The company focuses 
                                on producing high-quality, durable products and promoting environmentally friendly practices. Patagonia is 
                                widely recognized for its transparency, fair trade policies, and efforts to reduce its carbon footprint.
                            </div>
                            <h4>What are some sustainable business practices?</h4>
                            <br></br>
                            <p className="small"><strong>1. Use of eco-friendly materials:</strong>Companies can opt for sustainable materials such 
                            as organic cotton, recycled fabrics, and biodegradable fibers to reduce their environmental impact.</p>
                            <br></br>
                            <p className="small"><strong>2. Ethical supply chain: </strong>Ensuring fair labor practices, safe working conditions, 
                                and fair wages throughout the supply chain is crucial for sustainable business practices.</p>
                            <br></br>
                            <p className="small"><strong>3. Resource efficiency: </strong>Implementing strategies to reduce energy and water consumption, 
                                as well as waste generation, can significantly contribute to sustainability.</p>
                            <br></br>
                            <p className="small"><strong>4. Extended producer responsibility: </strong>Taking responsibility for the 
                                entire lifecycle of a product, including its disposal, by implementing recycling or take-back programs.</p>
                            <br></br>
                            <h4>Patagonia sustainable business practices examples:</h4>
                            <br></br>
                            <p className="small">
                                <strong>1. Patagonia's Worn Wear Program: </strong>company offer repair services and sells used Patagonia 
                                    clothing on their website.
                            </p>
                            <br></br>
                            <p className="small">
                                <strong>2. Patagonia's Fair Trade Certification</strong>
                            </p>
                            <br></br>
                            <p className="small">
                                <strong>3. Patagonia's use of recycled materials:</strong>  87% of Patagonia's products are made with recycled materials.
                            </p>
                            <br></br>
                            <p className="small"><strong>4. Patagonia's environmental advocacy: </strong>rather than selling the company or taking it public, 
                                Mr. Chouinard, his wife and two adult children have transferred their ownership of Patagonia, valued at about 
                                $3 billion, to a specially designed trust and a nonprofit organization. They were created to preserve the company's 
                                independence and ensure that all of its profits — some $100 million a year — are used to combat climate change 
                                and protect undeveloped land around the globe.</p>
                            <br></br>
                            <p className="small"><strong>5. Patagonia's Carbon Footprint:</strong> the goal of becoming carbon neutral by 2025. 
                                In the US, Patagonia uses 100% renewable energy and globally, they use 76% renewables as a source for 
                                their electricity.</p>
                            <div className="link">
                                <h4>Other sources about Patagonia we could refer to: </h4>
                                <br></br>
                                <a href="https://impactful.ninja/how-sustainable-is-patagonia/">https://impactful.ninja/how-sustainable-is-patagonia/</a>
                                <br></br>
                                <a href="https://www.patagonia.com/why-recycled/">https://www.patagonia.com/why-recycled/</a>
                                <br></br>
                                <a href="https://www.nytimes.com/2022/09/14/climate/patagonia-climate-philanthropy-chouinard.html">https://www.nytimes.com/2022/09/14/climate/patagonia-climate-philanthropy-chouinard.html</a>
                            </div>
                            <br></br>
                            <h4>How both companies are generating profit through their business practices (CSR policies)</h4>
                            <br></br>
                            <p className="small">1. Shein: Shein's profit generation primarily stems from its focus on low-cost production, 
                            economies of scale, and efficient supply chain management. By offering affordable products and targeting a
                            wide customer base, Shein achieves high sales volumes and profit margins.</p>
                            <br></br>
                            <p className="small">2. Patagonia: Patagonia's profit generation is based on a different model. 
                            The company places emphasis on quality, durability, and ethical production. It has built a loyal 
                            customer base that values sustainability and is willing to pay a premium for durable and eco-friendly products.</p>
                            <br></br>
                            <h4>Solutions on how they can do better for the environment </h4>
                            <p className="small">1. Shein: Shein can prioritize sustainable materials sourcing, reduce packaging waste, 
                            and invest in more ethical labor practices. Implementing recycling initiatives or partnering with organizations 
                            that promote clothing recycling can also contribute to reducing waste.</p>
                            <br></br>
                            <p className="small">2. Patagonia: While Patagonia already has robust sustainability practices, the company can 
                            continue to explore ways to reduce its carbon footprint further. This can include investing in renewable energy 
                            sources, minimizing water usage, and encouraging repair and resale programs to extend the life of its products.</p>
                            <br></br>
                            <h4>Circular economy </h4>
                            <br></br>
                            <p className="small">The circular economy is an economic model that aims to minimize waste and maximize resource 
                            efficiency. It focuses on designing products with the intention of recycling and reusing materials rather than 
                            disposing of them. By adopting circular economy principles, businesses can reduce environmental impacts and 
                            create value from waste streams.</p>
                            <br></br>
                            <div className="link">
                                <h4>Sources we could refer to/do more research on:</h4>
                                <br></br>
                                <a href="https://ellenmacarthurfoundation.org/topics/fashion/overview">https://ellenmacarthurfoundation.org/topics/fashion/overview</a>
                            </div>
                            <br></br>
                            <div className="overview">
                                <h4>Interesting facts</h4>
                                <br></br>
                                <p className="small">  1. The fast fashion industry is estimated to produce around 10% of global carbon emissions,
                                 more than international flights and maritime shipping combined.
                                 <br></br>
                                 2. Patagonia, known for its commitment to sustainability, donated its entire $10 million tax cut in 2017 
                                 to environmental causes.
                                 <br></br>
                                 3. Shein has faced criticism for its lack of transparency regarding its supply chain and the environmental and social impacts of its production processes.
                                 </p>
                                 <br></br>
                                <p><strong>Relationship between the generation of profit and their sustainable practices.</strong>
                                <br></br>
                                While sustainable practices can require initial investments, they can contribute to long-term 
                                profitability for companies. Customers are becoming increasingly aware of environmental and 
                                social issues, and they often prefer brands that align with their values. By adopting sustainable business 
                                practices, companies can build trust,
                                </p>
                            </div>
                        </div>
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
                            <p className="small">Like we mentioned in seminar 1, this program will culminate in a <strong>presentation</strong> done by 
                            both project partners. This includes a complete understanding, breath and depth, of the problem and an 
                            outlined analysis of the proposed solution.</p>
                            <br></br>
                            <p>Please link your presentation <a href="https://www.canva.com/design/DAFnBw0OzhA/-LEcFFWvRKo4FcpPXPYYnA/view?utm_content=DAFnBw0OzhA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">here</a> with open access. We suggest you use Canva as it is a 
                                collaborative working site, however, feel free to use any means to effectively convey your project.</p>
                            <br></br>
                            <h4>Task 2: Problem Statement </h4>
                            <br></br>
                            <p className="small">For each slide, persuasively convey the <strong>Problem, Background, Relevance, and Solution Objectives</strong> 
                            of your project. This helps the audience develop a logical understanding of your problem. (There should be <em>4 content slides</em> in total. )</p>
                            <br></br>
                            <p className="small">A problem statement is a short and concise outline if your problem. It includes the 
                            (1) Problem (2) Background (3) Relevance and (4) the solution objectives. Take this example:</p>
                            <br></br>
                            <div className="overview"><strong>Problem:</strong> The average customer service on-hold time for Example company exceeds 
                            five minutes during both its busy and slow seasons. The company is currently understaffed and customer 
                            service representatives are overwhelmed.</div>
                            <div className="background"><strong>Background:</strong> Example company is facing a significant challenge in 
                            managing their customer service on-hold times. In the past (1), the company had been known for its efficient 
                            and timely customer service, but due to a combination of factors, including understaffing and increased customer 
                            demand, the on-hold times have exceeded five minutes consistently. This has resulted in frustration and dissatisfaction 
                            among customers (2), negatively impacting the company's reputation and customer loyalty.
                            <br></br>
                            <br></br>
                            <p className="small">(1) How was this problem approached in the past?
                            <br></br>
                                (2) What are the reactions from people impacted by this problem? 
                            </p></div>
                            <div className="link"><strong>Relevance:</strong> Reducing the on-hold times for customer service callers is 
                                crucial for Example company. Prolonged waiting times have a detrimental effect on customer satisfaction and 
                                loyalty, leading to potential customer churn and loss of revenue (3). Additionally, the company's declining 
                                reputation in terms of customer service can have a lasting impact on its competitive position in the market. 
                                Addressing this problem is of utmost importance to improve customer experience and maintain a positive brand image.
                                <br></br>
                                (3) What are the short-term, long-term consequences were this problem to persist?
                            </div>
                            <br></br>
                            <div className="link + heh"><p><strong>Objectives: </strong>The primary objective (4) of this project is to reduce the on-hold times for 
                            customer service callers at Example company. The specific objectives include:</p>
                            <br></br>
                            <p className="small"> <i class="fa-solid fa-circle"></i> Analyzing the current customer service workflow and 
                            identifying bottlenecks contributing to increased on-hold times.</p>
                            <br></br>
                            <p className="small"> <i class="fa-solid fa-circle"></i> Assessing the staffing levels and resource 
                            allocation to determine the extent of understaffing and its impact on customer service.</p>
                            <br></br>
                            <p className="small"> <i className="fa-solid fa-circle"></i>Developing strategies and implementing 
                            measures to optimize the customer service workflow and reduce on-hold times.</p>
                            <br></br>
                            <p className="small"> <i className="fa-solid fa-circle"></i>Monitoring and evaluating the effectiveness of 
                            the implemented measures through key performance indicators (KPIs) such as average on-hold time, customer 
                            satisfaction ratings, and customer feedback</p>
                            <br></br></div>
                            <br></br>
                            <h4>Task 3: Empathy Mapping</h4>
                            <br></br>
                            <p className="small">
                                1. Please identify 2-3 people directly consuming your solution (these are called your customers) 
                                or are directly impacted by the benefits of your solution (these are called your beneficiaries). 
                                <br></br>
                                <p className="small">- Afterwards, you and your partner should fill the empathy map below for each 
                                of your main stakeholders. We will use this simpler model. 
                                </p>
                            </p>
                            <br></br>
                            <div className="img">
                                <img src={require ("./img/picture2.png")} alt="" ></img>
                            </div>
                            <p className="small">Paste the Empathy Maps right after the Relevance slide.</p>
                            <br></br>
                            <h4>Pre-seminar Preparation: Expectations for the next seminar </h4>
                            <br></br>
                            <p className="small">
                                1. Next week, we will delve into a case study that has successfully utilize Design Thinking 
                                in their work: Bringing clean toilets to Ghana! Below is a short report of their project, please have a read.
                                <p className="small">a. The <a href="https://www.wsup.com/content/uploads/2017/08/PN008-ENGLISH-CleanTeam.pdf">Case Study</a></p>
                            </p>
                            <br></br>
                            <p className="small">Be prepared to share your slides with the bigger team in our 3rd seminar! </p>
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
                                Decipher between the parts of your solution that is “crisis-oriented” and “vision-oriented.” 
                                This distinction requires different approaches to appeal to your audience.
                                <br></br>
                                <p className="small">
                                    -   For example, the lack of infrastructure for sanitation is a crisis in Ghana. It's common knowledge that 
                                    new bathrooms must be created to serve the citizens - this addresses the crisis. However, creating toilets 
                                    that stores waste in your house to be picked up may raise skepticisms from your customers, making this facet 
                                    of your product vision-oriented. 
                                    <br></br>
                                    <p className="small">
                                        + For points made in the crisis-oriented box, write a <strong><u>justification</u></strong> for why your consumers will 
                                        readily adopt such aspect of your solution. Estimate the extent of effectiveness of said aspect. 
                                        <br></br>
                                        + For points made in the vision-oriented box, outline <strong><u>potential skepticism</u></strong> of such aspect of your 
                                        solution and how you aim to tackle them, or what information must you collect to understand why the skepticism exists.
                                    </p>
                                </p>
                            </p>
                            <div className="img">
                                <img src={require ("./img/picture3.png")} alt=""></img>
                                <sub>**Add this to your presentation</sub>
                            </div>
                            <br></br>
                            <h4>Task 2: Stakeholder Analysis</h4>
                            <br></br>
                            <p className="small">For sake of simplification, lets create 3 general personas for the ideal people 
                            using/impacted by your solution. For each box, list down the specific profile of your audience and 
                            answer the questions below. </p>
                            <div className="img">
                                <img src={require ("./img/picture4.png")} alt=""></img>
                                <sub>**Add this to your presentation</sub>
                            </div>
                            <br></br>
                            <h4>Task 3: Continue your presentation </h4>
                            <br></br>
                            <p classname="small">Work with your partner to complete unfinished portions of your presentation.</p>
                            <br></br>
                            <h4>Pre-seminar Preparation: Expectations for the next seminar  </h4>
                            <br></br>
                            <p className="small"><strong><u>Be prepared to share your slides with the bigger team in our 4th seminar!</u></strong></p>
                        </div>
                    </div>
                </div>
                <div className="box + se4">
                        <div className="Seminar">
                            <h2>Seminar 4: Case study</h2>
                            <br></br>
                            <div className="content_seminar">
                                <h4>Delta Air Lines</h4>
                                <br></br>
                                <p className="small">
                                    <a href="https://esg.deltaww.com/en/manage_international">Delta Air Lines.</a> The company has implemented 
                                    a program called Delta's Green IT initiative, which focuses on reducing electronic waste. Delta has 
                                    partnered with recycling companies to ensure that old electronics are properly disposed of and recycled, 
                                    rather than being sent to landfills. The airline also has programs in place to reduce fuel consumption, 
                                    which not only reduces waste but also saves the company money.
                                </p>
                                <br></br>
                                <div className="overview">
                                Sources: 
                                <br></br>
                                <br></br>
                                    <a href="https://www.delta.com/us/en/about-delta/sustainability">https://www.delta.com/us/en/about-delta/sustainability</a>
                                    <a href="https://esg.deltaww.com/en/manage_international">https://esg.deltaww.com/en/manage_international</a>
                                </div>
                                <br></br>
                                <h4>Eileen Fisher</h4>
                                <br></br>
                                <p className="small">Eileen Fisher has adopted a closed-loop model where the products are designed to minimize 
                                waste and the materials used are sourced from sustainable sources. The company also offers a take-back program 
                                where customers can return their clothes for recycling or resale. These clothes are either reused, repurposed, 
                                or recycled into new products.</p>
                                <br></br>
                                <p className="small">
                                “Reducing clothing waste: EILEEN FISHER was also an early adopter of clothing take-back programs, and its Renew 
                                line, launched in 2009, helps customers keep clothing out of landfill by bringing it back to EILEEN FISHER for resale. “ - 
                                from
                                <br></br>
                                <br></br>
                                <p className="small">
                                    1. <a href="https://www.stern.nyu.edu/sites/default/files/assets/documents/EILEEN%20FISHER%20Case.pdf">NYU The Business Case for Sustainable Apparel at EILEEN FISHER report</a>
                                    <br></br>
                                    <br></br>
                                    2. <a href="https://www.vogue.com/article/eileen-fisher-amy-hall-sustainabiity-horizon-2030"> https://www.vogue.com/article/eileen-fisher-amy-hall-sustainabiity-horizon-2030</a>
                                    <br></br>
                                    <br></br>
                                    3. <a href="https://www.researchgate.net/publication/360609368_Sustainable_fast_fashion_-_case_study_of_HM"> https://www.researchgate.net/publication/360609368_Sustainable_fast_fashion_-_case_study_of_HM</a>
                                </p>
                                </p>
                                <div className="link">
                                    <h4>Case Study: H&M's Garment Collecting Initiative</h4>
                                    <br></br>
                                    <p className="small">HM, a global fashion retailer, has implemented various initiatives to promote 
                                    recycling and circular economy practices within the fashion industry. One notable case study that 
                                    exemplifies H&M's commitment to textile recycling and circular economy is their Garment Collecting initiative.</p>
                                </div>
                                <div className="link">
                                    <h4>Background:</h4>
                                    <p className="small">H&M recognized the environmental impact of textile waste and the importance 
                                    of diverting garments from landfills. In response, they launched the Garment Collecting initiative 
                                    in 2013, aimed at collecting used garments and recycling them into new textiles.</p>
                                    <br></br>
                                    <br></br>
                                    <h4>Solution: Garment Collecting Initiative:</h4>
                                    <p className="small">
                                    The Garment Collecting initiative encourages customers to bring unwanted clothing, regardless of 
                                    brand or condition, to H&M stores for recycling. Customers receive a discount voucher for each bag
                                    of clothing they bring, which can be used towards future purchases. H&M then sorts the collected 
                                    garments, with wearable items being resold as secondhand clothing, and unwearable items being recycled 
                                    into new textiles.
                                    </p>
                                </div>
                                <div className="link">
                                    <h4>Benefits and Impact:</h4>
                                    <br></br>
                                    <p className="small">
                                        1. Reduction of Textile Waste: The Garment Collecting initiative significantly reduces 
                                        textile waste by diverting unwanted garments from landfills. H&M's collection system allows 
                                        customers to easily and conveniently recycle their clothing, promoting a circular economy by 
                                        giving old textiles new life.
                                        <br></br>
                                        2. Promotion of Sustainable Consumption: The initiative encourages customers to adopt more 
                                        sustainable consumption habits by extending the life of their clothing and diverting them 
                                        from disposal. By providing incentives for recycling, H&M motivates customers to participate 
                                        in sustainable practices.
                                        <br></br>
                                        3. Closed-Loop Recycling: H&M works with recycling partners to process and convert the collected 
                                        garments into new textiles. This closed-loop recycling process helps reduce the need for virgin 
                                        materials, conserving resources, energy, and water.
                                        <br></br>
                                        4. Awareness and Education: The initiative raises awareness about the environmental impact of textile 
                                        waste and promotes the concept of circularity in fashion. Through in-store communication and digital 
                                        channels, H&M educates customers about the benefits of recycling and the importance of choosing sustainable 
                                        options.
                                    </p>
                                </div>
                                <div className="about">
                                    <h4>Lessons Learned:</h4>
                                    <br></br>
                                    <p className="small">H&M's Garment Collecting initiative demonstrates the potential of engaging customers 
                                    in the circular economy and promoting textile recycling. The initiative's success lies in its simplicity, 
                                    offering customers a convenient and rewarding way to recycle their clothing. By providing incentives and 
                                    raising awareness about textile waste, H&M has successfully created a system that encourages sustainable 
                                    consumption and reduces the environmental impact of discarded garments.
                                    <br></br>
                                    <br></br>
                                    This case study highlights the importance of a well-designed collection system, clear communication about 
                                    the initiative's purpose and impact, and collaboration with recycling partners. H&M's Garment Collecting 
                                    initiative serves as an example for the fashion industry, showcasing how retailers can actively contribute 
                                    to a circular economy by establishing effective textile recycling programs that engage and incentivize 
                                    customers to recycle their clothing.</p>
                                </div>
                            </div>
                        </div>
                </div>

                <div className=" box + presentation">
                    <div className="Seminar">
                        <div className="content_seminar">
                            <h2>Final Product</h2>
                            <div className="final_production">
                            <div className="Infog">
                                <h4>Infographic</h4>
                                <br></br>
                                <img src={require ("./img/intro.png")} alt="" onClick={()=> togglePDF("Infog")}></img>
                            </div>
                            <div className="Present">
                                <h4>Presentation</h4>
                                <br></br>
                                <img src={require ("./img/Presentation.png")} alt="" onClick={()=> togglePDF("Presentation")}></img>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <Project currentImageType={currentImageType} />
            <Footer />
            <SetupSubtopic2 />
            {showPDF && <button className="btn_toggle_pdf" title="Close" onClick={togglePDF}>
                <i class="fa-solid fa-xmark"></i>
            </button>
            }
        </div>
    )
}


export default Project1;