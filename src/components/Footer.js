import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-about">
          <h3 className="gradient-text">YEAB </h3>
          <p>
            Creative Frontend Developer crafting beautiful and interactive web experiences.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaEnvelope /> yabget19@email.com</p>
          <p><FaPhone /> +251 961 983 411</p>
        </div>

        <div className="footer-socials">
          <h4>Follow Me</h4>
          <div className="socials">
           <a href="https://github.com/yeabget"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yeabsira-getachew-962001329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
            <a href="https://t.me/Yabiget"><FaTelegram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Yeabsira Getachew. All rights reserved.</p>
      </div>
    </footer>
  );
}
