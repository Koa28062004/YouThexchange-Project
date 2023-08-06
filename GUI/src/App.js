import React from "react";
import { BrowserRouter , Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import Main from "./SDGs_Page/SDGs_Main"
import About_us from "./About_us_Page/About_us";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SDGs" element={<Main />} />
        <Route path="/About_us" element={<About_us />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
