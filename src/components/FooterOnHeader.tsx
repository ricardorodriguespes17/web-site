import { BiHome } from "react-icons/bi";
import { AiOutlineRocket, AiOutlineUser } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import styles from "../styles/components/FooterOnHeader.module.css";

interface FooterOnHeaderProps {
  onClose: () => void;
}

export default function FooterOnHeader({ onClose }: FooterOnHeaderProps) {
  return (
    <>
      <footer className={styles.component}>
        <a href="#home" onClick={() => onClose()}>
          <BiHome />
          Home
        </a>
        <a href="#about" onClick={() => onClose()}>
          <AiOutlineUser />
          Sobre
        </a>
        <a href="#skills" onClick={() => onClose()}>
          <AiOutlineRocket />
          Habilidades
        </a>
        <a href="#portifolio" onClick={() => onClose()}>
          <FiGithub />
          Portifólio
        </a>
        <a href="#contact" onClick={() => onClose()}>
          <BsChatDots />
          Contato
        </a>
      </footer>
      <button className={styles.closeMenu} onClick={() => onClose()}>
        <IoMdClose />
      </button>
    </>
  );
}
