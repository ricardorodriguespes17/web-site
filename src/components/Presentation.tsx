import { useContext } from "react";
import { BiMouse } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { PageContext } from "../contexts/pageContext";
import useInfo from "../hooks/useInfo";

import styles from "../styles/components/Presentation.module.css";

export default function Presentation() {
  const { onMouseInPage } = useContext(PageContext);
  const { title, subtitle, presentation } = useInfo();

  return (
    <div
      className={styles.home}
      id="home"
      onMouseEnter={() => onMouseInPage("home")}
    >
      <div className={styles.content}>
        <div className={styles.details}>
          <h1>{title}</h1>
          <h3 className={styles.subTitle}>{subtitle}</h3>
          <p className={styles.description}>{presentation}</p>
          
          <a className={styles.contactMe} href="#contact">
            Entre em contato
          </a>

          <a className={styles.scrollDown} href="#about">
            <BiMouse className={styles.mouseIcon} />
            <p>Ver mais</p>
            <BsArrowDownShort className={styles.arrowDownIcon} />
          </a>
        </div>
        <div className={styles.contentImage}>
          <img src="assets/profile.png" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
