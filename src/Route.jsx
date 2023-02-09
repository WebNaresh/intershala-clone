import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Result from "./Component/Result/Result";
import Profile from "./Component/Profile/Profile";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/" element={<Profile />} /> */}
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Result" element={<Result />} />
      <Route exact path="/Profile" element={<Profile />} />
    </Routes>
  );
};
export default App;
