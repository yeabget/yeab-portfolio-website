import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import FloatingIcons from "./components/FloatingIcons";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";

function HomePage() {
  const [register,setRegister]=useState(false)
  return (
    
    <>
      <Hero />
      <About />
      <Journey/>
      <Skills/>
      <Certificates/>
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

function App() {
  

  return (
    <div >
      <Navbar />
      <FloatingIcons />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
         <Route path="/journey" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
