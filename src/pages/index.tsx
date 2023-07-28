import { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Formation from "../components/Formation";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Portifolio from "../components/Portifolio";
import Projects from "../components/Projects";
import ScrollTopButton from "../components/ScrollTopButton";
import Skills from "../components/Skills";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isShowedScrollTop, setIsShowedScrollTop] = useState(false);
  const [isLateralHeader, setIsLateralHeader] = useState(false);

  useEffect(() => {
    const element = document.getElementById("__next");

    element.onscroll = () => {
      setIsLateralHeader(element.scrollTop > 50);
      setIsShowedScrollTop(element.scrollTop > 200);
    };
  }, []);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  return (
    <div className={styles.container}>
      <Header
        isDarkTheme={isDarkTheme}
        floating={isLateralHeader}
        onChangeTheme={() => setIsDarkTheme(!isDarkTheme)}
      />

      <Presentation />
      <About />
      <Formation />
      <Skills />
      <Portifolio />
      <Projects />

      <Footer />

      {isShowedScrollTop && <ScrollTopButton />}
    </div>
  );
}
