import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="floating-container">

      <motion.div className="floating-icon" style={{ top:"20%", left:"10%", color:"#e34c26", fontSize: "80px" }}
        animate={{ y:[0,-30,0] }} transition={{ duration:6, repeat:Infinity }}>
        <FaHtml5/>
      </motion.div>
      
       <motion.div className="floating-icon" style={{ top:"40%", left:"90%", color:"#e34c26" , fontSize: "80px"}}
        animate={{ y:[0,-80,0] }} transition={{ duration:6, repeat:Infinity }}>
        <FaHtml5/>
      </motion.div>

      <motion.div className="floating-icon" style={{ top:"20%", left:"60%", color:"#264de4", fontSize: "80px" }}
        animate={{ y:[0,-40,0] }} transition={{ duration:7, repeat:Infinity }}>
        <FaCss3Alt/>
      </motion.div>
      <motion.div className="floating-icon" style={{ top:"60%", left:"30%", color:"#f0db4f", fontSize: "80px" }}
        animate={{ y:[0,-35,0] }} transition={{ duration:5, repeat:Infinity }}>
        <FaJs/>
      </motion.div>

    </div>
  );
}