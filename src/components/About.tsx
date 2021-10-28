import Section from "./Section";
import { BsChatSquareDots, BsDownload } from "react-icons/bs";

import styles from "../styles/components/About.module.css";

export default function About() {
  return (
    <Section id="about" title="Sobre" description="Um pouco sobre mim">
      <div className={styles.content}>
        <div className={styles.contentImage}>
          <img src="assets/about.jpg" alt="Foto de Ricardo Rodrigues" />
        </div>

        <div className={styles.details}>
          <div className={styles.detailsTopic}>
            <BsChatSquareDots />
            <p className={styles.description}>
              Cursando Ciência da Computação na Universidade Estadual do
              Sudoeste da Bahia (UESB).
            </p>
          </div>
          <div className={styles.detailsTopic}>
            <BsChatSquareDots />
            <p className={styles.description}>
              Em busca de novos desafios na área da programação, contribuindo
              cada vez mais para o avanço da tecnologia da informação, pois
              acredito que isso tende a mudar cada vez mais o mundo para melhor.
            </p>
          </div>

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
