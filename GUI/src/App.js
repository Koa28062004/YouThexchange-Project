import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import Main from "./SDGs_Page/SDGs_Main"
import AboutUs from "./About_us_Page/About_us";
import Subtopic1 from "./Pilot_Program/Subtopic_1/Subtopic_1";
import Subtopic2 from "./Pilot_Program/Subtopic_2/Subtopic_2";
import ProjectMain from "./Project/Project_main";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SDGs" element={<Main />} />
        <Route path="/About_us" element={<AboutUs />} />
        <Route path="/Pilot_Program/Subtopic_1" element={<Subtopic1 />} />
        <Route path="/Pilot_Program/Subtopic_2" element={<Subtopic2 />} />
        <Route path="/Project" element={<ProjectMain />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
