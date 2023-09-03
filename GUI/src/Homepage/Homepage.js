import "./Homepage.css";
import Tool,{Tool_mobile} from "../Tool/Tool";
import Footer from "../Footer/Footer";
import Slide from "./Home_Slide/Slide";
import SDGslogo from "../SDGs_Page/SDGs_Setup/SDGs_logo";
import More from "./Home_Information/More_in4"
import {Search_mobile} from "../Tool/Search";
function Homepage() {
  return (
    <div className="body_homepage">
      <Tool />
      <Search_mobile />
      <Tool_mobile />
      <SDGslogo></SDGslogo>
      <div className="main_homepage">
        <div className="main">
          <Slide />
        </div>
        <More />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
