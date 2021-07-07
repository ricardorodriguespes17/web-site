import Section from "./Section";

import styles from "../styles/components/Formation.module.css";
import { useState } from "react";
import Timeline from "./Timeline";
import { IoMdSchool } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";

interface FormationType {
  starting: number;
  finishing?: number;
  description: string;
}

export default function Formation() {
  const [formationOpened, setFormationOpened] = useState<
    "academic" | "professional"
  >("academic");

  const [academicFormation] = useState<FormationType[]>([
    {
      starting: 2014,
      finishing: 2016,
      description: "Técnico em Informática - IFNMG",
    },
    {
      starting: 2019,
      finishing: 2019,
      description: "Curso de Javascript - Udemy",
    },
    {
      starting: 2019,
      finishing: 2019,
      description: "Curso de React Native - Udemy",
    },
    { starting: 2017, description: "Ciência da Computação - UESB" },
  ]);

  const [professionalFormation] = useState<FormationType[]>([
    {
      starting: 2016,
      finishing: 2016,
      description: "Estágio em TI - Informax",
    },
    {
      starting: 2018,
      finishing: 2018,
      description: "Minicurso Android Studio - UESB",
    },
    {
      starting: 2020,
      description: "Estágio em Programação - Mercadótica Franquias",
    },
  ]);

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
