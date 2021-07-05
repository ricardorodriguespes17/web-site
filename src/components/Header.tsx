import styles from "../styles/components/Header.module.css";
import { BiMoon, BiSun } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import FooterOnHeader from "./FooterOnHeader";
import { useState } from "react";

interface HeaderProps {
  isDarkTheme: boolean;
  onChangeTheme: () => void;
}

export default function Header({ isDarkTheme, onChangeTheme }: HeaderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className={styles.content}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#portifolio">Portifólio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <button className={styles.themeToggle} onClick={() => onChangeTheme()}>
        {isDarkTheme ? <BiSun /> : <BiMoon />}
      </button>

      <button className={styles.openMenu} onClick={() => setIsOpenMenu(true)}>
        <BsGrid />
      </button>

      {isOpenMenu && (
        <div className={styles.menu}>
          <FooterOnHeader onClose={() => setIsOpenMenu(false)} />
        </div>
      )}
    </header>
  );
}
