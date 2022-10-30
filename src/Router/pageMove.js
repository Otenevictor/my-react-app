import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./User";
import About from "./About";
import NoPage from "./Errorpage";

function PageMove() {
  return (
    <section class="navbar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/user" element={<Users />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </section>
  );
}




export default PageMove;
