import { IoMdSchool } from "react-icons/io";
import styles from "../styles/components/FormationClass.module.css";
import FormationEnum from "../types/FormationEnum";

interface FormationClassProps {
  formationOpened: FormationEnum;
  thisFormation: FormationEnum;
  setFormationOpened: () => void;
  children: React.ReactNode;
}

export default function FormationClass({ children, formationOpened, thisFormation, setFormationOpened }: FormationClassProps) {

  return (
    <button
      className={formationOpened === thisFormation ? styles.selected + " " + styles.buttonFormation : styles.buttonFormation}
      onClick={() => setFormationOpened()}
    >
      {children}
    </button>
  );
}