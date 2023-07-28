import { useContext } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { PageContext } from "../contexts/pageContext";
import useInfo from "../hooks/useInfo";
import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  const { onMouseInPage } = useContext(PageContext);
  const { contacts, aboutTitle, skillsTitle, formationTitle, portifolioTitle } = useInfo();

  return (
    <footer
      className={styles.component}
      id="contact"
      onMouseEnter={() => onMouseInPage("contact")}
    >
      <div className={styles.pageContents}>
        <a href="#home">Home</a>
        <a href="#about">{aboutTitle}</a>
        <a href="#skills">{skillsTitle}</a>
        <a href="#formation">{formationTitle}</a>
        <a href="#portifolio">{portifolioTitle}</a>
      </div>

      <div className={styles.contactMe}>
        <span className={styles.contact}>
          <FiMail />
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </span>
        <span className={styles.contact}>
          <AiOutlineWhatsApp />
          <a target="_blank" href={contacts.whatsappLink}>
            {contacts.whatsapp}
          </a>
        </span>
        <div className={styles.socialMedia}>
          <a href={contacts.linkedin}>
            <AiFillLinkedin />
          </a>
          <a href={contacts.facebook}>
            <AiFillFacebook />
          </a>
          <a href={contacts.instagram}>
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
