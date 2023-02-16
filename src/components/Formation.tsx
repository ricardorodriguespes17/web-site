import Section from "./Section";

import styles from "../styles/components/Formation.module.css";
import { useState } from "react";
import Timeline from "./Timeline";
import { IoMdSchool } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import useInfo from "../hooks/useInfo";

export default function Formation() {
  const [formationOpened, setFormationOpened] = useState<
    "academic" | "professional"
  >("academic");

  const {academicFormation, professionalFormation} = useInfo()

  return (
    <Section
      id="formation"
      title="Formação"
      description="Marcos importantes na minha trajetória acadêmica e profissional"
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <button
            className={formationOpened === "academic" ? styles.selected : ""}
            onClick={() => setFormationOpened("academic")}
          >
            <IoMdSchool />
            Acadêmica
          </button>

          <button
            className={
              formationOpened === "professional" ? styles.selected : ""
            }
            onClick={() => setFormationOpened("professional")}
          >
            <MdBusinessCenter />
            Profissional
          </button>
        </div>

        {formationOpened === "academic" && (
          <Timeline timePoints={academicFormation} />
        )}

        {formationOpened === "professional" && (
          <Timeline timePoints={professionalFormation} />
        )}
      </div>
    </Section>
  );
}
