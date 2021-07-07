import Section from "./Section";
import { BsDownload } from "react-icons/bs";

import styles from "../styles/components/About.module.css";

export default function About() {
  return (
    <Section id="about" title="Sobre" description="Um pouco sobre mim">
      <div className={styles.content}>
        <div className={styles.contentImage}>
          <img src="assets/about.jpg" alt="Foto de Ricardo Rodrigues" />
        </div>

        <div className={styles.details}>
          <p className={styles.description}>
            Lorem ipsum convallis nunc malesuada suspendisse consequat tortor
            aptent mollis ultrices nisl potenti mattis auctor in, auctor sed
            mauris curabitur condimentum aliquam id tempor sit mi rhoncus nulla
            mattis.
          </p>

          <a
            href="Ricardo_CV.pdf"
            target="_blank"
            className={styles.downloadCV}
          >
            Baixar CV
            <BsDownload />
          </a>
        </div>
      </div>
    </Section>
  );
}
