import Section from "./Section";
import { BsChevronDown, BsLayoutWtf } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { CgDatabase } from "react-icons/cg";

import styles from "../styles/components/Skills.module.css";
import { useState } from "react";
import { BiMobileAlt } from "react-icons/bi";
import RangeBar from "./RangeBar";

export default function Skills() {
  const [openedSkill1, setOpenedSkill1] = useState(true);
  const [openedSkill2, setOpenedSkill2] = useState(false);
  const [openedSkill3, setOpenedSkill3] = useState(false);

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
            <RangeBar title="ReactJS" percent={100} />
            <RangeBar title="HTML" percent={100} />
            <RangeBar title="Javascript" percent={100} />
            <RangeBar title="CSS" percent={90} />
            <RangeBar title="NextJS" percent={80} />
            <RangeBar title="React Native" percent={70} />
            <RangeBar title="ElectronJS" percent={60} />
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
            <RangeBar title="NodeJS" percent={100} />
            <RangeBar title="Express" percent={90} />
            <RangeBar title="Firebase" percent={80} />
            <RangeBar title="Knex" percent={80} />
            <RangeBar title="PostegreSQL" percent={70} />
          </div>
        </div>
        {/* Mobile */}
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
            <RangeBar title="Java" percent={80} />
            <RangeBar title="C++" percent={75} />
            <RangeBar title="Python" percent={60} />
          </div>
        </div>
      </div>
    </Section>
  );
}
