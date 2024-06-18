import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SEO from "./SEO";
import CS from "./Component/cs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SEO />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cs" element={<CS />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
