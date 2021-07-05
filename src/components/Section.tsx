import styles from "../styles/components/Section.module.css";

interface SectionProps {
  id: string;
  title: string;
  description: string;
}

export default function Section({ id, title, description }: SectionProps) {
  return (
    <section id={id} className={styles.container}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
