import "./Homepage.css";
import Tool from "../Tool/Tool";
import Footer from "../Footer/Footer";
import Slide from "./Home_Slide/Slide";
import Run from "./Set_up_Home";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import More from "./Home_Information/More_in4"

function Homepage() {
  return (
    <div className="body_homepage">
      <h1>HOME PAGE</h1>
      <Tool />
      <SDGslogo></SDGslogo>
      <div className="main_homepage">
        <div className="main">
          <div className="exchange">
            <div className="pre">
              <button className="pre_btn"><i class="fa-solid fa-chevron-left"></i></button>
            </div>
            <div className="next">
              <button className="next_btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
          <Slide />
        </div>
        <More />
      </div>
      <Footer />
      <Run />
    </div>
  );
}

export default Homepage;
