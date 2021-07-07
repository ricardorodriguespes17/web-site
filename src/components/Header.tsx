import styles from "../styles/components/Header.module.css";
import { BiMoon, BiSun, BiHome } from "react-icons/bi";
import { AiOutlineRocket, AiOutlineUser } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

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
  return (
    <header
      className={
        floating ? `${styles.content} ${styles.floating}` : styles.content
      }
    >
      <ul>
        <li>
          <a href="#home">
            <BiHome className={styles.icon} title="Home" />
            {!floating && <p>Home</p>}
          </a>
        </li>
        <li>
          <a href="#about">
            <AiOutlineUser className={styles.icon} title="Sobre" />
            {!floating && <p>Sobre</p>}
          </a>
        </li>
        <li>
          <a href="#formation">
            <IoMdSchool className={styles.icon} title="Formação" />
            {!floating && <p>Formação</p>}
          </a>
        </li>
        <li>
          <a href="#skills">
            <AiOutlineRocket className={styles.icon} title="Habilidades" />
            {!floating && <p>Habilidades</p>}
          </a>
        </li>
        <li>
          <a href="#portifolio">
            <FiGithub className={styles.icon} title="Portifólio" />
            {!floating && <p>Portifólio</p>}
          </a>
        </li>
        <li>
          <a href="#contact">
            <BsChatDots className={styles.icon} title="Contato" />
            {!floating && <p>Contato</p>}
          </a>
        </li>
      </ul>

      <button className={styles.themeToggle} onClick={() => onChangeTheme()}>
        {isDarkTheme ? <BiSun /> : <BiMoon />}
      </button>
    </header>
  );
}
