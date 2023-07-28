import Section from "./Section";

import styles from "../styles/components/Formation.module.css";
import { useState } from "react";
import Timeline from "./Timeline";
import { IoMdSchool } from "react-icons/io";
import { MdBusinessCenter, MdEventAvailable } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import useInfo from "../hooks/useInfo";
import FormationClass from "./FormationClass";
import FormationEnum from "../types/FormationEnum";

export default function Formation() {
  const [formationOpened, setFormationOpened] = useState<FormationEnum>(FormationEnum.ACADEMIC);

  const { academicFormation, professionalFormation, coursesFormation, eventsFormation, formationTitle, formationSubtitle, academicTitle, professionalTitle, eventsTitle, coursesTitle } = useInfo();

  return (
    <Section
      id="formation"
      title={formationTitle}
      description={formationSubtitle}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <FormationClass thisFormation={FormationEnum.ACADEMIC} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.ACADEMIC)}>
            <IoMdSchool />
            {academicTitle}
          </FormationClass>
          <FormationClass thisFormation={FormationEnum.COURSES} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.COURSES)}>
            <PiCertificateBold />
            {coursesTitle}
          </FormationClass>
          <FormationClass thisFormation={FormationEnum.EVENTS} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.EVENTS)}>
            <MdEventAvailable />
            {eventsTitle}
          </FormationClass>
          <FormationClass thisFormation={FormationEnum.PROFESSIONAL} formationOpened={formationOpened} setFormationOpened={() => setFormationOpened(FormationEnum.PROFESSIONAL)}>
            <MdBusinessCenter />
            {professionalTitle}
          </FormationClass>
        </div>

        {formationOpened === FormationEnum.ACADEMIC && (
          <Timeline timePoints={academicFormation} />
        )}

        {formationOpened === FormationEnum.COURSES && (
          <Timeline timePoints={coursesFormation} />
        )}

        {formationOpened === FormationEnum.EVENTS && (
          <Timeline timePoints={eventsFormation} />
        )}

        {formationOpened === FormationEnum.PROFESSIONAL && (
          <Timeline timePoints={professionalFormation} />
        )}
      </div>
    </Section>
  );
}
