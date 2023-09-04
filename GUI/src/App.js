import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import Main from "./SDGs_Page/SDGs_Main"
import AboutUs from "./About_us_Page/About_us";
import Subtopic1 from "./Pilot_Program/Subtopic_1/Subtopic_1";
import Subtopic2 from "./Pilot_Program/Subtopic_2/Subtopic_2";
import ProjectMain from "./Project/Project_main";
import Project1 from "./Project/Project1/Project1";
import Project2 from "./Project/Project2/Project2";
import CoreTeam from "./About_us_Page/Core_team";
import ProjectVideos from "./ProjectVideos/ProjectVideos";
import Subtopic3 from "./Pilot_Program/Subtopic_3/Subtopic_3";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SDGs" element={<Main />} />
        <Route path="/About_us" element={<AboutUs />} />
        <Route path="/Project_1" element={<Subtopic1 />} />
        <Route path="/Project_2" element={<Subtopic2 />} />
        <Route path="/Project_3" element={<Subtopic3 />} />
        <Route path="/Project" element={<ProjectMain />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Core_Team" element={<CoreTeam />} />
        <Route path = "/ProjectVideos" element = {<ProjectVideos />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
