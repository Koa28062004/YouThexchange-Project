import "../App.css";
import Tool from "./Tool/Tool";
import Footer from "./Home_Footer/Footer";
import Slide from "./Home_Slide/Slide";

function Homepage() {
  return (
    <div className="App">
      <h1>HOME PAGE</h1>
      <Tool />
      <div className="main">
        <div className="exchange">
          <div className="pre">
            <button className="pre_btn">pre</button>
          </div>
          <div className="next">
            <button className="next_btn">next</button>
          </div>
        </div>
        <Slide />
      </div>
      <div className="more_inf">
        <button className="btn_moreinf">How to register</button>
        <button className="btn_moreinf">Projects</button>
        <button className="btn_moreinf">Contact</button>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
