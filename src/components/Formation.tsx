import Section from "./Section";

import styles from "../styles/components/Formation.module.css";
import { useState } from "react";
import Timeline from "./Timeline";
import { IoMdSchool } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import useInfo from "../hooks/useInfo";
import FormationClass from "./FormationClass";
import FormationEnum from "../types/FormationEnum";

export default function Formation() {
  const [formationOpened, setFormationOpened] = useState<FormationEnum>(FormationEnum.ACADEMIC);

  const { academicFormation, professionalFormation, coursesFormation } = useInfo();

  return (
    <Section
      id="formation"
      title="Formação"
      description="Marcos importantes na minha trajetória acadêmica e profissional"
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <FormationClass thisFormation={FormationEnum.ACADEMIC} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.ACADEMIC)}>
            <IoMdSchool />
          </FormationClass>
          <FormationClass thisFormation={FormationEnum.COURSES} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.COURSES)}>
            <PiCertificateBold />
          </FormationClass>
          <FormationClass thisFormation={FormationEnum.PROFESSIONAL} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.PROFESSIONAL)}>
            <MdBusinessCenter />
          </FormationClass>

          {/* <button
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
          </button> */}
        </div>

        {formationOpened === FormationEnum.ACADEMIC && (
          <Timeline timePoints={academicFormation} />
        )}

        {formationOpened === FormationEnum.COURSES && (
          <Timeline timePoints={coursesFormation} />
        )}

        {formationOpened === FormationEnum.PROFESSIONAL && (
          <Timeline timePoints={professionalFormation} />
        )}
      </div>
    </Section>
  );
}
