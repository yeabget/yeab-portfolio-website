import { motion } from "framer-motion";
import profile from "../assets/port.jpg";
import cvFile from "../assets/yeab cv.pdf";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profile}
            alt="profile"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            Hi, I'm Yeabsira 
          </motion.h1>
          <h3 className="gradient-text">Frontend website developer</h3>
          <p>
            I craft modern, responsive, and high-performance web interfaces.
            I turn ideas into smooth, interactive user experiences.
            Passionate about clean code and beautiful design.
          </p>

          <motion.div className="hero-buttons">
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="hire-me">
              Hire Me
            </motion.button>
            <a href={cvFile} target="_blank" rel="noopener noreferrer">
        <motion.button className="cv">
           See My CV
         </motion.button>
          </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
