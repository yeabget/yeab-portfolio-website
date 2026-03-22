import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError("Please fill all fields"); return; }
    if (!form.email.includes("@")) { setError("Enter a valid email"); return; }
    setError("");
  };

  return (
    <section id="contact">
      <h2 className="gradient-text">Contact Me</h2>

      <div className="contact-container">

        <motion.div className="contact-info" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h3>Let's Connect</h3>
          <p><FaEnvelope /> yabget19@email.com</p>
          <p><FaPhone /> +251 961 983 411</p>
          <div className="socials">
            <a href="https://github.com/yeabget"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yeabsira-getachew-962001329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
            <a href="https://t.me/Yabiget"><FaTelegram /></a>
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
          {error && <p className="error">{error}</p>}
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Send Message</motion.button>
        </motion.form>

      </div>
    </section>
  );
}
