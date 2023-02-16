import { useState } from "react";
import Section from "./Section";
import { BsChevronDown, BsLayoutWtf } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { CgDatabase } from "react-icons/cg";
import RangeBar from "./RangeBar";
import useInfo from "../hooks/useInfo";

import styles from "../styles/components/Skills.module.css";

export default function Skills() {
  const [openedSkill1, setOpenedSkill1] = useState(true);
  const [openedSkill2, setOpenedSkill2] = useState(false);
  const [openedSkill3, setOpenedSkill3] = useState(false);

  const { skills } = useInfo();

  return (
    <Section
      id="skills"
      title="Habilidades"
      description="Minhas habilidades na área"
    >
      <div className={styles.content}>
        {/* Frontend */}
        <div
          className={
            openedSkill1 ? styles.skill + " " + styles.opened : styles.skill
          }
        >
          <div className={styles.skillTitle}>
            <MdWeb className={styles.titleIcon} />
            <h2>Frontend</h2>
            <BsChevronDown
              className={styles.arrowIcon}
              onClick={() => setOpenedSkill1(!openedSkill1)}
            />
          </div>
          <div className={styles.skills}>
            {skills.frontend.map(item => 
              <RangeBar key={item.skill} title={item.skill} percent={item.percent} />
            )}
          </div>
        </div>
        {/* Backend */}
        <div
          className={
            openedSkill2 ? styles.skill + " " + styles.opened : styles.skill
          }
        >
          <div className={styles.skillTitle}>
            <CgDatabase className={styles.titleIcon} />
            <h2>Backend</h2>
            <BsChevronDown
              className={styles.arrowIcon}
              onClick={() => setOpenedSkill2(!openedSkill2)}
            />
          </div>
          <div className={styles.skills}>
            {skills.backend.map(item =>
              <RangeBar key={item.skill} title={item.skill} percent={item.percent} />
            )}
          </div>
        </div>
        {/* Others */}
        <div
          className={
            openedSkill3 ? styles.skill + " " + styles.opened : styles.skill
          }
        >
          <div className={styles.skillTitle}>
            <BsLayoutWtf className={styles.titleIcon} />
            <h2>Outros</h2>
            <BsChevronDown
              className={styles.arrowIcon}
              onClick={() => setOpenedSkill3(!openedSkill3)}
            />
          </div>
          <div className={styles.skills}>
            {skills.others.map(item =>
              <RangeBar key={item.skill} title={item.skill} percent={item.percent} />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
