import styles from "../styles/components/Header.module.css";
import { BiMoon, BiSun, BiHome } from "react-icons/bi";
import {
  AiOutlineRocket,
  AiOutlineUser,
  AiOutlineProject,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";
import { useContext, useState } from "react";
import { PageContext } from "../contexts/pageContext";

interface HeaderProps {
  isDarkTheme: boolean;
  floating: boolean;
  onChangeTheme: () => void;
}

export default function Header({
  isDarkTheme,
  floating,
  onChangeTheme,
}: HeaderProps) {

  const [links] = useState([
    { link: "home", title: "Home", Icon: BiHome },
    { link: "about", title: "Sobre", Icon: AiOutlineUser },
    { link: "formation", title: "Formação", Icon: IoMdSchool },
    { link: "skills", title: "Habilidades", Icon: AiOutlineRocket },
    { link: "portifolio", title: "Portifólio", Icon: FiGithub },
    { link: "projects", title: "Projetos", Icon: AiOutlineProject },
    { link: "contact", title: "Contato", Icon: BsChatDots },
  ]);

  return (
    <header
      className={
        floating ? `${styles.content} ${styles.floating}` : styles.content
      }
    >
      <ul>
        {links.map((item) => (
          <li key={item.link}>
            <a href={`#${item.link}`}>
              <item.Icon className={styles.icon} title={item.title} />
              {!floating && <p>{item.title}</p>}
            </a>
          </li>
        ))}
      </ul>

      <button className={styles.themeToggle} onClick={() => onChangeTheme()}>
        {isDarkTheme ? <BiSun /> : <BiMoon />}
      </button>
    </header>
  );
}
