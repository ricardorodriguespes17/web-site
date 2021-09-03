import Section from "./Section";

import styles from "../styles/components/Projects.module.css";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projetos"
      description="Alguns projetos práticos"
    >
      <div className={styles.content}>
        <a
          href="https://finance-psi.vercel.app"
          target="_blank"
          className={styles.project}
        >
          <h3 className={styles.title}>Finance</h3>
          <img src="assets/finance.png" />
        </a>
        <a
          href="https://gobblet-gobblers.vercel.app"
          target="_blank"
          className={styles.project}
        >
          <h3 className={styles.title}>Gobblet Gobblers</h3>
          <img src="assets/gg.png" />
        </a>
        <a
          href="https://blog.mercadotica.com"
          target="_blank"
          className={styles.project}
        >
          <h3 className={styles.title}>Blog Mercadótica</h3>
          <img src="assets/blog.png" />
        </a>
      </div>
    </Section>
  );
}
