import { AiOutlineCalendar } from "react-icons/ai";
import useInfo from "../hooks/useInfo";
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
          if (index % 2 === 0) {
            return (
              <div
                key={index}
                className={styles.pointDescription}
                style={{
                  marginLeft: `${(1 / timePoints.length) * index * 100}%`,
                  top: `${(index / timePoints.length) * 100}%`,
                }}
              >
                <p>{point.title}</p>
                <strong>
                  <AiOutlineCalendar />
                  {point.period}
                </strong>
              </div>
            );
          }
          return null;
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
          if (index % 2 === 1) {
            return (
              <div
                key={index}
                className={styles.pointDescription}
                style={{
                  marginLeft: `${(1 / timePoints.length) * index * 100}%`,
                  top: `${(index / timePoints.length) * 100}%`,
                }}
              >
                <p>{point.title}</p>
                <strong>
                  <AiOutlineCalendar />
                  {point.period}
                </strong>
              </div>
            );
          }

          return null;
        })}
      </div>

      {timePoints.map((_, index) => (
        <>
          <div
            key={index}
            className={styles.point}
            style={{
              left: `calc(${(index / timePoints.length) * 100}% + 90px)`,
              top: `calc(${(index / timePoints.length) * 100}% + 10px)`,
            }}
          ></div>
        </>
      ))}
    </div>
  );
}
