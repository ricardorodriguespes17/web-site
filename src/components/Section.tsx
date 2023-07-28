import { useContext } from "react";
import { PageContext } from "../contexts/pageContext";
import styles from "../styles/components/Section.module.css";

interface SectionProps {
  id: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {

  return (
    <section id={id} className={styles.container}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>

      {children}
    </section>
  );
}
