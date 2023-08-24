import React ,{useState}from "react";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import Footer from "../../Footer/Footer";
import Tool from "../../Tool/Tool";
import "./Project1.css"
import PilotProgram from "./SetupProject1/setupProject1";
import SetupSubtopic2 from "./SetupProject1/set";

const Project1=()=>{
    const [currentImageType, setCurrentImageType] = useState("Linh");
    return(
        <div className="Project1_body">
            <Tool />
            <SDGslogo />
            <h1>SUSTAINABILITY & BUSINESSES</h1>
            <div className="Project1_main">
                
                <div className="Teammate_profile">
                    <h1>Teammate profile</h1>
                    <div className="profiles">
                    <div className="profile">
                        <div className="profile_img">
                            <img src={ require ("./img/rashi.JPG")} alt=""></img>
                        </div>
                        <div className="name_teammate">
                            Name:Rashi Mukherjee
                            <i class="fa-solid fa-circle-info"></i>
                        </div>
                        <div className="profile_main">
                             <p>Age: 17</p>
                             <p> Nationality: Thailander</p>
                             <p>Education: Senior (KIS International School, Thailand)</p>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profile_img">
                            <img src={ require ("./img/rashi.JPG")} alt=""></img>
                        </div>
                        <div className="name_teammate">
                            Name:Rashi Mukherjee
                            <i class="fa-solid fa-circle-info"  onClick={() =>setCurrentImageType("Linh")}></i>
                        </div>
                        <div className="profile_main">
                             <p>Age: 17</p>
                             <p> Nationality: Thailander</p>
                             <p>Education: Senior (KIS International School, Thailand)</p>
                        </div>
                    </div>
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
                            <p><strong>Objectives: </strong>The primary objective (4) of this project is to reduce the on-hold times for 
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
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <PilotProgram currentImageType={currentImageType} />
            <Footer />
            <SetupSubtopic2 />
        </div>
    )
}


export default Project1;