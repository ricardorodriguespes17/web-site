import styles from "../styles/components/RangeBar.module.css";

interface RangeBarProps {
  title: string;
  percent: number;
}

export default function RangeBar({ title, percent }: RangeBarProps) {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <p>{percent}%</p>
      </div>
      <div className={styles.bar}>
        <div style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
