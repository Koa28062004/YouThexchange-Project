import React from "react";
import Tool,{Tool_mobile} from "../Tool/Tool";
import "./Core_team.css"
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import Footer from "../Footer/Footer";
import { Search_mobile } from "../Tool/Search";

const  currentYear =new Date().getFullYear() ;
const CoreTeamData=[
    {
        Name:"Caligine Nguyen",
        name:"Nguyen Pham Anh Thu (Caligine Nguyen)",
        age:currentYear-2004,
        edu:"Biotechnology Undergraduate at the University of Science, Ho Chi Minh City, Vietnam",
        pos:"Director of Academics & Outreach, Vietnam",
        bonus:"",
        mail:"ngphamanhthu.workspace@gmail.com",
        img:`Anh_Thu.jpg`
    },
    {
        Name:"Rashi Mukherjee",
        name:"Rashi Mukherjee",
        age:currentYear-2006,
        edu:"Senior (KIS International School, Thailand)",
        pos:" Director of Logistics",
        bonus:"",
        mail:"rashimukherjee2005@gmail.com",
        img:`Rashi.JPG`
    },
    {
        Name:"Freya Tran",
        name:"Quynh Bao Ngan Tran (Freya Tran)",
        age:currentYear-2004,
        edu:" Undergraduate - The University of Melbourne",
        pos:" Director of External Relations, Australia",
        bonus:"",
        mail:"freyatran2004@gmail.com",
        img:`Ngan.JPG`
    },
    {
        Name:"Van Anh",
        name:"Van Anh Nguyen",
        age:currentYear-2006,
        edu:" Senior (KIS International School, Thailand)",
        pos:"  Executive Director ",
        mail:"lilynguyenvananh@gmail.com",
        bonus:"",
        img:`Van_Anh.png`
    }
]

function CoreTeam(){
    return(
        <div className="CoreTeam_body">
            <Tool></Tool>
            <Tool_mobile />
            <Search_mobile />
            <SDGslogo></SDGslogo>
            <div className="CoreTeam_main">
                <div className="header-core">
                    <h1>Core Team</h1>
                </div>
                {CoreTeamData.map((member,index) => (
                    <div key={index} className="Profile_core">
                    <div className="infor-core">
                        <div className="Name">{member.Name}</div>
                        <div className="Information">Name: {member.name}<br></br><br></br>
                        Age: {member.age} <br></br><br></br>
                        Education: {member.edu}<br></br><br></br>
                        Position in the core team: {member.pos}<br></br><br></br>
                        {member.bonus} </div>
                        <a href={`mailto:${member.mail}`} className="Mail">
                        <i class="fa-solid fa-envelope"></i> : {member.mail}
                        </a>

                    </div>
                    <div className="img-core">
                        <img src={require (`./img/${member.img}`)} alt=""/>
                    </div>
                </div>
                ))}
                
            </div>
            <Footer />
        </div>
    )
} 

export default CoreTeam;