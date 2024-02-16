import Section from "./Section";
import { BsChatSquareDots, BsDownload } from "react-icons/bs";

import styles from "../styles/components/About.module.css";
import useInfo from "../hooks/useInfo";

export default function About() {
  const { aboutText1, aboutText2, aboutTitle, aboutSubtitle, CVButton, CVLink } = useInfo();

  return (
    <Section id="about" title={aboutTitle} description={aboutSubtitle}>
      <div className={styles.content}>
        <div className={styles.contentImage}>
          <img src="assets/about.jpg" alt="Foto de Ricardo Rodrigues" />
        </div>

        <div className={styles.details}>
          <div className={styles.detailsTopic}>
            <BsChatSquareDots />
            <p className={styles.description}>{aboutText1}</p>
          </div>
          <div className={styles.detailsTopic}>
            <BsChatSquareDots />
            <p className={styles.description}>{aboutText2}</p>
          </div>

          <a
            href={CVLink}
            target="_blank"
            className={styles.downloadCV}
          >
            {CVButton}
            <BsDownload />
          </a>
        </div>
      </div>
    </Section>
  );
}
