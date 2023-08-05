import React from "react";
import { BrowserRouter , Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import Main from "./SDGs_Page/SDGs_Main"
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/meow" element={<Homepage />} />
        <Route path="SDGs" element={<Main />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
