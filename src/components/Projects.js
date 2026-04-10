import { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import addis from "../assets/addis.jpg";
import fluent from "../assets/fluent.jpg";
import tigat from "../assets/tigat.jpg";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const containerRef = useRef(null);

  const projects = [
    {
      title: "Addis Mart Landing Page",
      desc: "React js website",
      image: addis,
      live: "https://addissupermarket.netlify.app/",
      code: "https://github.com/yeabget/Addis-supermarket",
    },
    {
      title: "Fluent online Courses",
      desc: "React js website",
      image: fluent,
      live: "https://fluent-online-courses.netlify.app/",
      code: "https://github.com/yeabget/fluent-online-courses",
    },
    {
      title: "Tigat online Courses",
      desc: "React js website",
      image: tigat,
      live: "https://tigat-onlinelearnin-platform.netlify.app/",
      code: "https://github.com/yeabget/Tigat-Online-learning-platform",
    },
  ];

  const images = projects.map((p) => ({
    original: p.image,
    thumbnail: p.image,
  }));

  const openGallery = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  /* BUTTON SCROLL ONLY */
  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.querySelector(".project-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 20;

    container.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.querySelector(".project-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 20;

    container.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects">
      <h1 className="gradient-text">Projects</h1>

      {/* PROJECTS */}
      <div className="projects-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
          
              src={project.image}
              alt={project.title}
              onClick={() => openGallery(index)}
            />

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="buttons">
                <a href={project.live} target="_blank" rel="noreferrer" className="live-btn">
                  Live
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="code-btn">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <div className="slider-controls">
        <button onClick={scrollPrev} className="nav-btn">
          <IoChevronBack size={22} />
        </button>
        <button onClick={scrollNext} className="nav-btn">
          <IoChevronForward size={22} />
        </button>
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
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        </div>
      )}
    </section>
  );
}