import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.component} id="contact">
      <div className={styles.pageContents}>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#formation">Formação</a>
        <a href="#portifolio">Portifólio</a>
      </div>

      <div className={styles.contactMe}>
        <span className={styles.contact}>
          <FiMail />
          <a href="mailto:ricardor662@gmail.com">ricardor662@gmail.com</a>
        </span>
        <span className={styles.contact}>
          <AiOutlineWhatsApp />
          <a href="https://api.whatsapp.com/send?phone=5533988792719&text=Ol%C3%A1%2C%20Ricardo!">
            +55 33 988792719
          </a>
        </span>
        <div className={styles.socialMedia}>
          <a href="https://www.linkedin.com/in/ricardorodrigues17/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.facebook.com/ricardorodrigues17">
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/ricardo_rodrigues17/">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
