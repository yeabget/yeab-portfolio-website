import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function FloatingIcons() {
  const floatingAnimation = {
    y: [0, -60, 0],
    x: [0, 20, -20, 0],
    opacity: [0.2, 0.8, 0.2],
    scale: [0.6, 1, 0.6],
  };

  return (
    <div className="floating-container" style={{ position: "absolute", width: "100%", height: "100%" }}>
      
      {[...Array(40)].map((_, i) => (  
        <motion.div
          key={i}
          className="floating-icon"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            color: "#ebe0dd",
            position: "absolute",
          }}
          animate={floatingAnimation}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
        
          <HiSparkles size={6 + Math.random() * 6} />
        </motion.div>
      ))}

    </div>
  );
}