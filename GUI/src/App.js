import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import Main from "./SDGs_Page/SDGs_Main"
import About_us from "./About_us_Page/About_us";
import Subtopic_1 from "./Pilot_Program/Subtopic_1/Subtopic_1";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SDGs" element={<Main />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/Pilot_Program/Subtopic_1" element={<Subtopic_1 />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
