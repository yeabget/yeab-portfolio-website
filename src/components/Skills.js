import React, { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaJava, FaPython } from "react-icons/fa";
import { SiReact, SiCplusplus } from "react-icons/si";

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = window.innerWidth <= 768;

    if (!container || !isMobile) return;

    let animationFrameId;

    const scroll = () => {
      container.scrollLeft += 0.5;

      // reset when end reached
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="skill-container">
      <h1 className="gradient-text">Skills</h1>

      <div className="skills" ref={containerRef}>
        <div className="skill-list"><FaHtml5 color="#E34F26" size={45}/><p>HTML</p></div>
        <div className="skill-list"><FaCss3Alt color="#1572B6" size={45}/><p>CSS</p></div>
        <div className="skill-list"><FaJs color="#F7DF1E" size={45}/><p>JavaScript</p></div>
        <div className="skill-list"><FaNodeJs color="#339933" size={45}/><p>Node.js</p></div>
        <div className="skill-list"><SiReact color="#61DBFB" size={45}/><p>React</p></div>
        <div className="skill-list"><FaBootstrap color="#7952B3" size={45}/><p>Bootstrap</p></div>
        <div className="skill-list"><SiCplusplus color="#00599C" size={45}/><p>C++</p></div>
        <div className="skill-list"><FaJava color="#007396" size={45}/><p>Java</p></div>
        <div className="skill-list"><FaPython color="#3776AB" size={45}/><p>Python</p></div>
      </div>
    </div>
  );
}