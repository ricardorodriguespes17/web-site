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
import { useEffect, useState } from "react";
import useInfo from "../hooks/useInfo";
import useLanguage from "../hooks/useLanguage";
import { IconType } from "react-icons/lib";

interface HeaderProps {
  isDarkTheme: boolean;
  floating: boolean;
  onChangeTheme: () => void;
}

interface LinkType { link: string, title: string, Icon: IconType; }

export default function Header({
  isDarkTheme,
  floating,
  onChangeTheme,
}: HeaderProps) {

  const { aboutTitle, formationTitle, skillsTitle, portifolioTitle, projectsTitle, contactTitle } = useInfo();
  const { changeToPortuguese, changeToEnglish } = useLanguage();

  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    setLinks([
      { link: "home", title: "Home", Icon: BiHome },
      { link: "about", title: aboutTitle, Icon: AiOutlineUser },
      { link: "formation", title: formationTitle, Icon: IoMdSchool },
      { link: "skills", title: skillsTitle, Icon: AiOutlineRocket },
      { link: "portifolio", title: portifolioTitle, Icon: FiGithub },
      { link: "projects", title: projectsTitle, Icon: AiOutlineProject },
      { link: "contact", title: contactTitle, Icon: BsChatDots },
    ]);
  }, [aboutTitle]);

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

      <div className={styles.changeLanguage}>
        <button onClick={() => changeToPortuguese()}>
          <img src="assets/brasil.png" alt="Bandeira dos Estados Unidos" />
        </button>
        <button onClick={() => changeToEnglish()}>
          <img src="assets/usa.png" alt="Bandeira do Brasil" />
        </button>
      </div>

      <button className={styles.themeToggle} onClick={() => onChangeTheme()}>
        {isDarkTheme ? <BiSun /> : <BiMoon />}
      </button>
    </header>
  );
}
