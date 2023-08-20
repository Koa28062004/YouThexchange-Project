import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import Main from "./SDGs_Page/SDGs_Main"
import About_us from "./About_us_Page/About_us";
import Subtopic_1 from "./Pilot_Program/Subtopic_1/Subtopic_1";
import Subtopic_2 from "./Pilot_Program/Subtopic_2/Subtopic_2";
import Business from "./Pilot_Program/Subtopic_2/Subtopic/Business";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SDGs" element={<Main />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Pilot_Program/Subtopic_1" element={<Subtopic_1 />} />
        <Route path="/Pilot_Program/Subtopic_2" element={<Subtopic_2 />} />
        <Route path="/Pilot_Program/Subtopic_2/Business" element={<Business />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
