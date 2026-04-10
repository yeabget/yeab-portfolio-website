import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(sectionId);

    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <h2 className="logo">YEAB</h2>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>  <FaHome style={{ marginRight: "8px" }} /></Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
         <Link to="/journey" className={location.pathname === "/journey" ? "active" : ""}>Journey</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen? <FaTimes  />:<FaBars  />}
      </button>
    </nav>
  );
}