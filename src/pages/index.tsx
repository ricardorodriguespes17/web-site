import { useEffect } from "react";
import { useState } from "react";
import { BiMouse } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import Header from "../components/Header";
import ScrollTopButton from "../components/ScrollTopButton";
import Section from "../components/Section";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isShowedScrollTop, setIsShowedScrollTop] = useState(false);

  useEffect(() => {
    const element = document.getElementById("__next");

    element.onscroll = () => {
      if (element.scrollTop > 200) {
        setIsShowedScrollTop(true);
      } else {
        setIsShowedScrollTop(false);
      }
    };
  }, []);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  return (
    <div className={styles.container} onScroll={() => console.log("aqui")}>
      <Header
        isDarkTheme={isDarkTheme}
        onChangeTheme={() => setIsDarkTheme(!isDarkTheme)}
      />

      <div className={styles.home} id="home">
        <div className={styles.content}>
          <div className={styles.details}>
            <h1>Prazer, Ricardo Rodrigues</h1>
            <h3 className={styles.subTitle}>Desenvolvedor Frontend</h3>

            <p className={styles.description}>
              Lorem ipsum congue luctus imperdiet sed cras mauris arcu
              porttitor, duis odio eget dictum purus vulputate primis
              suspendisse porttitor, sociosqu at lorem habitasse conubia
              ultricies diam turpis.
            </p>

            <a className={styles.contactMe} href="#contact">
              Entre em contato
            </a>

            <a className={styles.scrollDown} href="#about">
              <BiMouse className={styles.mouseIcon} />
              <p>Ver mais</p>
              <BsArrowDownShort className={styles.arrowDownIcon} />
            </a>
          </div>
          <div className={styles.contentImage}>
            <img src="profile.png" className={styles.image} />
          </div>
        </div>
      </div>

      <Section id="about" title="Sobre" description="Um pouco sobre mim" />
      <Section
        id="skills"
        title="Habilidades"
        description="Minhas habilidades na área"
      />
      <Section
        id="portifolio"
        title="Portifólio"
        description="Meu portifólio no Github"
      />
      <Section id="contact" title="Contato" description="Entre em contato" />

      {isShowedScrollTop && <ScrollTopButton />}
    </div>
  );
}
