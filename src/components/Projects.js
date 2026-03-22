import { useState } from "react";
import ImageGallery from "react-image-gallery";

import amrogn from "../assets/amro.jpg";
import deby from "../assets/db.jpg";
import cbe from "../assets/et.jpg";
import kids from "../assets/kid.jpg";
import tesfaye from "../assets/tesfaye.jpg";
import ahadu from "../assets/ahadu.jpg";
import hawassa from "../assets/k1.jpg";
export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const projects = [
    { title: "Amrogn chicken Website clone", desc: "React commercial Website", image: amrogn },
    { title: "Debby Architectural Design Website", desc: "Responsive Design", image: deby },
    { title: "CBE website clone", desc: "Commercial Bank of Ethiopia website", image: cbe },
    { title: "Tesfaye penut butter Website clone", desc: "React commercial Website", image: tesfaye },
    { title: "Kids Fun zone", desc: "interative website which includes problem solving game,quiz app, movie recommendation for kids", image: kids },
    { title: "Ahadu supermarket", desc: "commercial website", image: ahadu },
     { title: "Hawassa Architectural design company website", desc: "commercial website", image: hawassa },
  ];

  const images = projects.map((project) => ({
    original: project.image,
    thumbnail: project.image,
    description: project.title,
  }));

  const openGallery = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="projects">
      <h2 className="gradient-text">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              onClick={() => openGallery(index)} /* click image to open gallery */
              style={{ cursor: "pointer" }}
            />

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>

            <ImageGallery
              items={images}
              startIndex={startIndex}
              showThumbnails={true}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
      )}
    </section>
  );
}