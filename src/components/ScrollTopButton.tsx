import { BiUpArrowAlt } from "react-icons/bi";

import styles from "../styles/components/ScrollTopButton.module.css";

export default function ScrollTopButton() {
  return (
    <button
      className={styles.component}
      onClick={() => document.getElementById("__next").scroll({ top: 0 })}
    >
      <BiUpArrowAlt />
    </button>
  );
}
