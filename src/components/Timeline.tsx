import { AiOutlineCalendar } from "react-icons/ai";
import styles from "../styles/components/Timeline.module.css";

interface TimelineProps {
  timePoints: FormationType[];
}

interface FormationType {
  title: string;
  period: string;
}

export default function Timeline({ timePoints }: TimelineProps) {
  return (
    <div className={styles.component}>
      <div className={styles.descriptions}>
        {timePoints.map((point, index) => {
          return (
            <div
              key={index}
              className={styles.pointDescription}
            >
              {index % 2 === 0 && (
                <>
                  <p>{point.title}</p>
                  <strong>
                    <AiOutlineCalendar />
                    {point.period}
                  </strong>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.line}>
        <div className={styles.dots}>
          <div />
          <div />
          <div />
        </div>

        <div className={styles.dots}>
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={styles.descriptions}>
        {timePoints.map((point, index) => {
          return (
            <div
              key={index}
              className={styles.pointDescription}
            >
              {index % 2 === 1 && (
                <>
                  <p>{point.title}</p>
                  <strong>
                    <AiOutlineCalendar />
                    {point.period}
                  </strong>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.points}>
        {timePoints.map((_, index) => (
          <div
            key={index}
            className={styles.point}
          ></div>
        ))}
      </div>
    </div>
  );
}
