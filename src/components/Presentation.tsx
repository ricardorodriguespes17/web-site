import { useContext } from "react";
import { BiMouse } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { PageContext } from "../contexts/pageContext";

import styles from "../styles/components/Presentation.module.css";

export default function Presentation() {
  const { onMouseInPage } = useContext(PageContext);

  return (
    <div
      className={styles.home}
      id="home"
      onMouseEnter={() => onMouseInPage("home")}
    >
      <div className={styles.content}>
        <div className={styles.details}>
          <h1>Prazer, Ricardo Rodrigues</h1>
          <h3 className={styles.subTitle}>Desenvolvedor Full Stack</h3>

          <p className={styles.description}>
            Apaixonado por Javascript e desenvolvimento de aplicações. Gosto de
            solucionar problemas usando programação. Muito curioso, sempre estou
            rastreando as novas tecnologias na área.
          </p>

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
